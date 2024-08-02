export default function Wave(props : any) {
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