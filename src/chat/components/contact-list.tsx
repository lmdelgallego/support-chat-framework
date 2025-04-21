import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NavLink } from "react-router";

const dummyContacts = [
  {
    id: "1",
    initials: "G5",
    name: "G5 Customer",
    color: "blue",
  },
  {
    id: "2",
    initials: "JD",
    name: "John Doe",
    color: "green",
  },
  {
    id: "3",
    initials: "AS",
    name: "Alice Smith",
    color: "purple",
  },
  {
    id: "4",
    initials: "RJ",
    name: "Robert Johnson",
    color: "yellow",
  },
  {
    id: "5",
    initials: "EW",
    name: "Emma Wilson",
    color: "pink",
  },
];

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
  return (
    <ScrollArea className="h-[calc(100vh-64px)]">
      <div className="space-y-4 p-4">
        <div className="space-y-1">
          <h3 className="px-2 text-sm font-semibold">Contacts</h3>
          <div className="space-y-1">
            {dummyContacts.map((contact) => (
              <NavLink key={contact.id} to={`/chat/${contact.id}`}>
                {({ isActive }) => (
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className="w-full justify-start cursor-pointer"
                  >
                    <div
                      className={`h-6 w-6 rounded-full bg-${contact.color}-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs`}
                    >
                      {contact.initials}
                    </div>
                    {contact.name}
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
