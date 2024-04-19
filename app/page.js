import Card from "./components/Card";
import CardBg from "./components/CardBg";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
     
      <Header />
      <div className="container mx-auto text-center py-5">
        <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold lg:leading-tight bg-clip-text bg-gradient-to-tl from-blue-500 to-fuchsia-500 text-transparent">
          Insights
        </h1>
        <h5 className="text-sm text-gray-800 font-medium ">
          <b> Stay in the know with Insights from industry experts.</b>
        </h5>
        <div className="flex justify-evenly py-5 mt-5">

          <Card />
          <Card />
          <CardBg />

        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="font-medium"><small>Want to read more? </small></p>
          <button type="button" class="text-xs py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hover:text-neutral-300 dark:hover:border-neutral-300">
            Go Here
          </button>
        </div>
      </div>
    </>
  )
}