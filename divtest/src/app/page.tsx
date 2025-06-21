import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Added width barrier container */}
      <div className="max-w-screen-xlg mx-auto px-4">
        <div className="flex">
          <div className="flex-1 bg-red-500">
            <h2>hey</h2>
          </div>
        </div>

        <div className="flex">
          <div className="flex-1 bg-red-500">
            <h2>hey</h2>
          </div>
          <div className="flex-1 bg-orange-500">
            <h2>hello</h2>
          </div>
        </div>

        <div className="flex">
          <div className="flex-1 bg-red-500">
            <h2>hey</h2>
          </div>
          <div className="flex-1 bg-orange-500">
            <h2>hello</h2>
          </div>
          <div className="flex-1 bg-yellow-500">
            <h2>hi!</h2>
          </div>
        </div>

        <div className="flex">
          <div className="flex-1 bg-red-500">
            <h2>hey</h2>
          </div>
          <div className="flex-1 bg-orange-500">
            <h2>hello</h2>
          </div>
          <div className="flex-1 bg-yellow-500">
            <h2>hi!</h2>
          </div>
          <div className="flex-1 bg-green-500">
            <h2>hola</h2>
          </div>
        </div>

        <div className="flex">
          <div className="flex-1 bg-red-500">
            <h2>hey</h2>
          </div>
          <div className="flex-1 bg-orange-500">
            <h2>hello</h2>
          </div>
          <div className="flex-1 bg-yellow-500">
            <h2>hi!</h2>
          </div>
          <div className="flex-1 bg-green-500">
            <h2>hola</h2>
          </div>
          <div className="flex-1 bg-blue-500">
            <h2>aloha</h2>
          </div>
        </div>

        <div className="flex">
          <div className="flex-1 bg-red-500">
            <h2>hey</h2>
          </div>
          <div className="flex-1 bg-orange-500">
            <h2>hello</h2>
          </div>
          <div className="flex-1 bg-yellow-500">
            <h2>hi!</h2>
          </div>
          <div className="flex-1 bg-green-500">
            <h2>hola</h2>
          </div>
          <div className="flex-1 bg-blue-500">
            <h2>aloha</h2>
          </div>
          <div className="flex-1 bg-indigo-500">
            <h2>ahoy</h2>
          </div>
        </div>

        <div className="flex">
          <div className="flex-1 bg-red-500">
            <h2>hey</h2>
          </div>
          <div className="flex-1 bg-orange-500">
            <h2>hello</h2>
          </div>
          <div className="flex-1 bg-yellow-500">
            <h2>hi!</h2>
          </div>
          <div className="flex-1 bg-green-500">
            <h2>hola</h2>
          </div>
          <div className="flex-1 bg-blue-500">
            <h2>aloha</h2>
          </div>
          <div className="flex-1 bg-indigo-500">
            <h2>ahoy</h2>
          </div>
          <div className="flex-1 bg-violet-500">
            <h2>shalom</h2>
          </div>
        </div>
      </div> {/* End of width barrier container */}

      {/* Fixed bg-black-500 to bg-black */}
      <div className="bg-black h-[100px]"> {/* CHANGED: fixed bg color */}
        <Link href="/carousel">Carousel Page</Link>
      </div>

      <div className="bg-white">
        {/* Added width barrier container */}
        <div className="max-w-screen-lg mx-auto px-4"> 
          <div className="flex">
            <div className="flex-1 bg-red-500">
              <h2>hey</h2>
            </div>
          </div>

          <div className="flex">
            <div className="flex-1 bg-red-500">
              <h2>hey</h2>
            </div>
            <div className="flex-1 bg-orange-500">
              <h2>hello</h2>
            </div>
          </div>
        </div> {/* End of width barrier container */}
      </div>
    </div>
  );
}
