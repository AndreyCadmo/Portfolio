export function Wave(props: any) {
    

    return (
        <svg
            className={`absolute w-full z-0 ${props.className}`}
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill={`${props.fill}`}
                fillOpacity="1"
                d="M0,224L48,213.3C96,203,192,181,288,192C384,203,480,245,576,245.3C672,245,768,203,864,192C960,181,1056,203,1152,213.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
        </svg>
    )
}

export function Wave2(props: any) {
    return (
        <svg className={`absolute z-0 h-auto md:h-36 w-screen md:w-auto ${props.className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={`${props.fill}`} fillOpacity="1" d="M0,320L80,277.3C160,235,320,149,480,117.3C640,85,800,107,960,106.7C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    )
}