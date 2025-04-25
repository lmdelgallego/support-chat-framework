import { getClient } from "@/fake/fake-dta";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import NoContactSelected from "../no-contact-selected";
import { ContactInfoSkeleton } from "../contact-info-skeleton";
import { ContactInfo } from "../contact-info";

const ContactDetails = () => {
  const { clientId } = useParams();

  const { data: client, isLoading } = useQuery({
    queryKey: ["clients", clientId],
    queryFn: () => getClient(clientId!),
    enabled: !!clientId,
  });

  if (!clientId) {
    return <NoContactSelected />;
  }

  if (isLoading || !client) {
    return <ContactInfoSkeleton />;
  }

  if (!client) {
    return <NoContactSelected />;
  }

  return <ContactInfo client={client} />;
};

export default ContactDetails;
