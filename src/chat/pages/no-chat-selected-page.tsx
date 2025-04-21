const NoChatSelectedPage = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-muted-foreground mb-2">No chat selected</h2>
        <p className="text-sm text-muted-foreground">
          Please select a chat from the list to start a conversation
        </p>
      </div>
    </div>
  );
};

export default NoChatSelectedPage;
