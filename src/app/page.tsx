import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-center text-5xl font-extrabold capitalize text-blue-300 my-5">
        Uzzu ki Kahani
      </h1>
      <div className="flex gap-4 flex-wrap w-full justify-around items-center">
        <div className="w-1/2 max-md:w-full px-5 py-3 font-semibold text-xl text-center">
          My self Bushra and my sister’s name is Uzma . She wakes up at 10 . She lie on the bed for half an hour
          Now she opens her nonsense calculator and starts her nonsense calculations and suddenly her insta 
          account opens . Then she starts typing and  blushing . It continues for some hours till her mom scolds 
          her then Uzma also shouts at her and stops blushing and typing and starts brushing. Now again her
          favourite calculator opens and she starts watching her nonsense reels. Now I enter the room she gets
          afraid of me and quickly shuts her spicy calculations on her nonsense calculator . Then she convinces
          me to go to other room but it is impossible to convince me 

          Now after being bored I go to other room Now again she resumes her stupid calculations with breakfast. 
          Now she takes a small break by doing ultra pro max fake studies with songs in the background only for
          15-20 min and then gets back to her nonstop dirty calculations again because she is “UNSTOPPABLE”.

        </div>
        <div className="w-2/5 max-md:w-4/5 px-4">
          <Image src={"/assets/uzzu_pic.jpeg"} alt="pro-pic" width={500} height={500} layout="responsive" />
        </div>
      </div>
    </main>
  );
}
