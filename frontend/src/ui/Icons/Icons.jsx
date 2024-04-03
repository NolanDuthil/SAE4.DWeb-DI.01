function MenuBar(props) {
    return (
        <svg dataslot="icon" fill="none" strokeWidth={2.5} stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    );
}
function Search(props) {
    return (
        <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
        </svg>
    );
}
function Mark(props) {
    return (
        <svg data-slot="icon" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"></path>
        </svg>
    );
}
function LogoFilmIn(props) {
    return (
        <svg dataslot="icon"
            xmlns="http://www.w3.org/2000/svg"
            className="site-header--on-mobile__logo"
            viewBox="0 0 300 84"
            {...props}>
            <path
                fill="#00FFA1"
                d="M128.45 83.896h17.33c1.89 0 3.15-1.258 3.15-3.146V43.526c0-1.258.42-1.677.841-1.677.526 0 .945.314 1.156 1.677l6.827 38.063c.209 1.257 1.365 2.306 2.835 2.306h3.36c1.472 0 2.627-1.049 2.838-2.306l6.932-38.063c.315-1.468.734-1.677 1.26-1.677.525 0 .736.42.736 1.677V80.75c0 1.888 1.26 3.146 3.15 3.146h17.332c1.89 0 3.15-1.258 3.15-3.146V3.157c0-1.887-1.26-3.146-3.15-3.146h-24.579c-1.996 0-2.941 1.26-3.256 3.146l-4.936 34.918c-.106.838-.525 1.257-1.156 1.257-.631 0-1.05-.42-1.156-1.257l-4.83-34.918c-.21-1.887-1.367-3.146-3.258-3.146H128.45c-1.891 0-3.15 1.26-3.15 3.146V80.75c-.001 1.888 1.259 3.146 3.15 3.146zM80.132 80.75c0 1.888 1.366 3.146 3.151 3.146h34.662c1.891 0 3.15-1.258 3.15-3.146v-9.96c0-1.783-1.259-3.147-3.15-3.147h-8.929c-1.574 0-2.31-.734-2.31-2.306V3.157c0-1.783-1.365-3.146-3.15-3.146H83.283c-1.785 0-3.15 1.364-3.15 3.146V80.75zm-33.716 0c0 1.888 1.26 3.146 3.151 3.146H69.84c1.89 0 3.15-1.258 3.15-3.146V3.157c0-1.887-1.26-3.146-3.15-3.146H49.568c-1.89 0-3.151 1.26-3.151 3.146V80.75zM3.248 83.896H23.52c1.89 0 3.15-1.258 3.15-3.146V53.592c0-1.573.841-2.411 2.417-2.411h8.192c1.89 0 3.152-1.258 3.152-3.146v-7.34c0-1.887-1.261-3.145-3.152-3.145h-8.192c-1.576 0-2.417-.839-2.417-2.412V18.676c0-1.573.841-2.412 2.417-2.412h8.928c1.89 0 3.15-1.258 3.15-3.145V3.157c0-1.887-1.26-3.146-3.15-3.146H3.248C1.358.011.097 1.271.097 3.157V80.75c0 1.888 1.26 3.146 3.151 3.146z"
            ></path>
            <path
                fill="#FFF"
                d="M240.206 80.75c0 1.888 1.26 3.146 3.151 3.146h18.276c1.891 0 3.152-1.258 3.152-3.146V51.391c0-.524.315-.84.84-.84.735 0 .84.525 1.365 1.887l9.979 29.257c.42 1.257 1.47 2.2 3.046 2.2h16.7c1.89 0 3.152-1.257 3.152-3.145V3.157c0-1.887-1.261-3.146-3.152-3.146H278.44c-1.89 0-3.151 1.26-3.151 3.146v29.36c0 .524-.315.839-.84.839-.63 0-.735-.21-1.156-1.363L263.21 2.423c-.525-1.572-1.47-2.412-3.256-2.412h-16.596c-1.89 0-3.151 1.259-3.151 3.146V80.75zm-33.717 0c0 1.888 1.26 3.146 3.152 3.146h20.272c1.89 0 3.15-1.258 3.15-3.146V3.157c0-1.887-1.26-3.146-3.15-3.146H209.64c-1.891 0-3.152 1.26-3.152 3.146V80.75z"
            ></path>
        </svg>
    );
}

function ArrowBack(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        ></path>
      </svg>
    );
  }

  function ArrowForward(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        ></path>
      </svg>
    );
  }

export {MenuBar,Search,Mark,LogoFilmIn,ArrowBack, ArrowForward}