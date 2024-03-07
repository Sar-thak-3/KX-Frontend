const Team = () => {
  return (
    <div className="bg-white w-[95%]  xl:w-[55.0625rem] max-w-[55.0625rem] mx-auto pt-2 pb-16 lg:pt-6 lg:px-6 lg:pb-6 rounded-2xl xl:mb-24">
      <section class="bg-white dark:bg-gray-900">
        <h2 className="text-2xl font-bold  leading-5 mb-3 lg:pb-3">Team</h2>
        <p class="font-light text-gray-500 lg:mb-8 sm:text-xl dark:text-gray-400">
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
        <div class="py-2 px-4 mx-auto max-w-screen-xl lg:py-2 lg:px-6 ">
          <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-1">
            <div class="items-center bg-blue-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <div className="w-32" style={{textAlign: "center", justifyContent: "center"}}>
                <a href="#" >
                  <img
                    class="rounded-lg sm:rounded-none sm:rounded-l-lg"
                    width={180}
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    alt="Bonnie Avatar"
                  />
                </a>
                <h4 class="text-base font-bold text-gray-900 dark:text-white">
                  <a href="#">Bonnie Green</a>
                </h4>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                    Developer
                </span>
              </div>

              <div class="p-5">
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe doloremque molestias facilis hic fuga tenetur, fugiat
                  temporibus quasi quibusdam minus obcaecati veritatis
                  exercitationem. Voluptatibus aut doloribus delectus illo,
                  doloremque alias!
                </p>
              </div>
            </div>
            <div class="items-center bg-blue-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <div>
                <a href="#">
                  <img
                    class="rounded-lg sm:rounded-none sm:rounded-l-lg"
                    width={150}
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    alt="Bonnie Avatar"
                  />
                </a>
                <h3 class="text-base font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Bonnie Green</a>
                </h3>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  Developer
                </span>
              </div>

              <div class="p-5">
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe doloremque molestias facilis hic fuga tenetur, fugiat
                  temporibus quasi quibusdam minus obcaecati veritatis
                  exercitationem. Voluptatibus aut doloribus delectus illo,
                  doloremque alias!
                </p>
              </div>
            </div>
            <div class="items-center bg-blue-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <div>
                <a href="#">
                  <img
                    class="rounded-lg sm:rounded-none sm:rounded-l-lg"
                    width={150}
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    alt="Bonnie Avatar"
                  />
                </a>
                <h3 class="text-base font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Bonnie Green</a>
                </h3>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  Developer
                </span>
              </div>

              <div class="p-5">
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe doloremque molestias facilis hic fuga tenetur, fugiat
                  temporibus quasi quibusdam minus obcaecati veritatis
                  exercitationem. Voluptatibus aut doloribus delectus illo,
                  doloremque alias!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
