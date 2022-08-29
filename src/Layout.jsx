import githubLogo from "./assets/github.png";

export const Layout = () => {
  return (
    <>
      <div className="bg-[#161b22] text-[#bdc3c5]   flex items-center px-7 py-4 ">
        <div className="flex gap-x-6  items-center">
          <img className="h-8 w-8 text-white" src={githubLogo} alt="" />
          <input type="search" placeholder="Search or jump to..." />
          <ul className="flex items-center">
            <li>
              <a href="">Pull requests</a>
            </li>
            <li>
              <a href="">Issues</a>
            </li>
            <li>
              <a href="">Marketplace</a>
            </li>
            <li>
              <a href="">Explore</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <header className="bg-gray-900 text-[#bdc3c5] h-24 flex flex-col px-7 justify-center gap-y-5 border-b border-gray-600">
            <div className="flex justify-between items-center">
              <h1>Facebook/React</h1>
              <ul className="flex items-center gap-x-6">
                <li>watch</li>
                <li>watch</li>
                <li>watch</li>
              </ul>
            </div>
            <ul className="flex gap-x-6">
              <li>Code</li>
              <li>issue</li>
              <li>pull request</li>
              <li>pull request</li>
              <li>pull request</li>
              <li>pull request</li>
              <li>pull request</li>
              <li>pull request</li>
            </ul>
          </header>
          <main className="bg-[#0d1117] h-screen  text-white ">
            <div className="px-40 flex">
              <div className="flex-1 bg-green-200 h-screen">code</div>
              <div className="bg-green-400 h-screen w-3/12">details</div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
