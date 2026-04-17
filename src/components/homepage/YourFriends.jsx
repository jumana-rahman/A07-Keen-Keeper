import Image from "next/image";
import Link from "next/link";

const YourFriends = ({ friends }) => {

    const getStatusColor = (status) => {
        if (status === "overdue") return "bg-[#EF4444]";
        if (status === "almost due") return "bg-[#EFAD44]";
        return "bg-[#244D3F]";
    };

    return (
        <div className='pb-20'>
            <div className='max-w-[80%] mx-auto'>
                <h3 className='text-[24px] text-[#1F2937] font-semibold pb-4'>
                    Your Friends
                </h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {friends.map((friend) => (
                        <Link key={friend.id} href={`/friend/${friend.id}`}>
                            <div className="card text-center p-6 bg-white border border-gray-100 rounded-sm hover:shadow-md transition cursor-pointer">

                                <div className="flex justify-center mb-2">
                                    <Image
                                        src={friend.picture}
                                        alt={friend.name}
                                        width={80}
                                        height={80}
                                        className="rounded-full"
                                    />
                                </div>

                                <h3 className="font-semibold text-[20px] text-[#1F2937]">
                                    {friend.name}
                                </h3>

                                <p className="text-[12px] text-[#64748B]">
                                    {friend.days_since_contact}d ago
                                </p>

                                <div className="flex flex-wrap justify-center gap-1 mt-2">
                                    {friend.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="badge bg-[#CBFADB] text-[12px] text-[#244D3F] uppercase rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-center mt-3">
                                    <span
                                        className={`badge capitalize text-[12px] text-white rounded-full ${getStatusColor(
                                            friend.status
                                        )}`}
                                    >
                                        {friend.status}
                                    </span>
                                </div>

                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default YourFriends;