import LinkButton from "@/components/serverSide/LinkButton";

export default function Page() {
  return (
    <section className="bg-backLight dark:bg-backDark justify-center flex ">
      <div className="grid grid-cols-1 md:grid-cols-12 pt-10 max-sm:max-w-80 md:max-w-6xl gap-10">
        <div className="md:col-span-4 ">
          <p className="text-sm leading-7 font-regular uppercase">
            Contato
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Entre em <span className="text-blue-950 dark:text-indigo-600">Contato</span>
          </h3>
          <p className="mt-4 leading-7 text-justify">
            Tem alguma dúvida, sugestão ou quer falar sobre um projeto? Fique à vontade para me enviar uma mensagem! Estou sempre aberto a novas ideias e oportunidades. Vou responder o mais rápido possível.
          </p>

          <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1 mt-5">
            <div className="mb-2 font-medium text-gray-800 dark:text-gray-300">Social</div>
            <ul className="mb-4 -ml-2 flex md:order-1 md:mb-0">

              <li>
                <a className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 "
                  aria-label="Instagram" href="https://www.instagram.com/cadmo_o/?hl=pt">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" className="h-5 w-5">
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    <path d="M16.5 7.5l0 .01"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/andreycadmo/" className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 65 65" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" className="h-5 w-5">
                    <path
                      d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
                      fill="currentColor" />
                  </svg></a>
              </li>

              <li>
                <a className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 "
                  aria-label="Github" href="https://github.com/AndreyCadmo"><svg xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5">
                    <path
                      d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                    </path>
                  </svg>
                </a>
              </li>

            </ul>

          </div>

        </div>
        <form className="md:col-span-8">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="grid-first-name">
                Primeiro nome
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 dark:bg-slate-700  border dark:border-slate-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name" type="text" placeholder="Andrey" required />

            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="grid-last-name">
                Sobrenome
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 dark:bg-slate-700 border border-gray-200 dark:border-slate-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name" type="text" placeholder="Oliveira" required />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="grid-password">
                Endereço de email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 dark:bg-slate-700  border border-gray-200 dark:border-slate-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email" type="email" placeholder="********@*****.**" required />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="grid-password">
                Sua mensagem
              </label>
              <textarea rows={10}
                className="appearance-none block w-full bg-gray-200 dark:bg-slate-700  border border-gray-200 dark:border-slate-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
            </div>
            <div className="flex justify-between w-full px-3">
              <div className="md:flex md:items-center">
                <label className="flex justify-center font-bold">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <span className="text-sm">
                    Me envie uma copia!
                  </span>
                </label>
              </div>
              <LinkButton href={"#"}>
                Enviar Mensagem
              </LinkButton>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}