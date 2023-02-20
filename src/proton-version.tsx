import { List } from "@raycast/api";
import { useFetch } from "@raycast/utils";
import ProtonVersionList from "./Components/ProtonVersionList";
import { Version } from "./interface";

const ProtonVersion = () => {
  const mailFetch = useFetch<Version>("https://mail.proton.me/assets/version.json");
  const driveFetch = useFetch<Version>("https://drive.proton.me/assets/version.json");
  const accountFetch = useFetch<Version>("https://account.proton.me/assets/version.json");
  const calendarFetch = useFetch<Version>("https://calendar.proton.me/assets/version.json");

  const isLoading = mailFetch.isLoading || calendarFetch.isLoading || driveFetch.isLoading || accountFetch.isLoading;

  return (
    <List isLoading={isLoading}>
      <ProtonVersionList environment="prod" product="Proton Mail" data={mailFetch.data} />
      <ProtonVersionList environment="prod" product="Proton Calendar" data={calendarFetch.data} />
      <ProtonVersionList environment="prod" product="Proton Drive" data={driveFetch.data} />
      <ProtonVersionList environment="prod" product="Proton Account" data={accountFetch.data} />
    </List>
  );
};

export default ProtonVersion;
