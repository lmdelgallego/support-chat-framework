import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getClients } from "@/fake/fake-dta";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router";

const recentContacts = [
  {
    id: "6",
    initials: "TM",
    name: "Thomas Miller",
    color: "gray",
  },
  {
    id: "7",
    initials: "SB",
    name: "Sarah Brown",
    color: "red",
  },
];

const ContactList = () => {
  const { data: contacts, isLoading } = useQuery({
    queryKey: ["contacts"],
    queryFn: () => getClients(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return (
    <ScrollArea className="h-[calc(100vh-64px)]">
      <div className="space-y-4 p-4">
        <div className="space-y-1">
          <h3 className="px-2 text-sm font-semibold">Contacts</h3>
          <div className="space-y-1">
            {isLoading && (
              <div className="flex items-center justify-center p-4">
                <div className="animate-spin rounded-full h-2 w-2 border-b-2 border-gray-900"></div>
                <span className="ml-3 text-sm text-gray-600">Loading contacts...</span>
              </div>
            )}

            {contacts?.map((contact) => (
              <NavLink key={contact.id} to={`/chat/${contact.id}`}>
                {({ isActive }) => (
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className="w-full justify-start cursor-pointer"
                  >
                    <div
                      className={`h-6 w-6 rounded-full bg-gray-400 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs`}
                    >
                      {contact.name.charAt(0)}
                    </div>
                    <span className="text-gray-600">{contact.name}</span>
                  </Button>
                )}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="pt-4 border-t mt-4">
          <h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
          {recentContacts.map((contact) => (
            <Button key={contact.id} variant="ghost" className="w-full justify-start">
              <div
                className={`h-6 w-6 rounded-full bg-${contact.color}-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs`}
              >
                {contact.initials}
              </div>
              {contact.name}
            </Button>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};

export default ContactList;
