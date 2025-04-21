import { MessageSquare } from "lucide-react";

export default function NoContactSelected() {
  return (
    <div className="flex-1 flex items-center justify-center p-4">
      <div className="text-center">
        <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
        <h2 className="text-xl font-semibold mb-2">No conversation selected</h2>
        <p className="text-muted-foreground">Choose a contact from the list to start chatting</p>
      </div>
    </div>
  );
}
