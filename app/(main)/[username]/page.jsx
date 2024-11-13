import { getUserByUserName } from "@/actions/users";
import { notFound } from "next/navigation";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EventCard from "@/components/eventcard";

export async function generateMetadata({ params }) {
  const user = await getUserByUserName(params.username);
  if (!user) {
    return {
      title: "User Not Found",
    };
  }
  return {
    title: `${user.name}'s Profile | Plannr`,
    description: `Plan a event with ${user.name}. View available public events and schedules`,
  };
}

const UserPage = async ({ params }) => {
  const user = await getUserByUserName(params.username);

  if (!user) {
    notFound();
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <Avatar className="w-24 h-24 mb-4">
          <AvatarImage src={user.imageUrl} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
        <p className="text-gray-600 text-center">
          Welcome to my scheduling page. Please select an event below to book a
          call with me.
        </p>
      </div>

      {user.length === 0 ? (
        <p className="text-center text-gray-600">No public events available</p>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 ">
          {user.events.map((event) => {
            return (
              <EventCard
                key={event.id}
                event={event}
                username={params.username}
                isPublic
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UserPage;
