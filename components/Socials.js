import SiteConfig from "../site.config";
import { HStack, Link, IconButton } from "@chakra-ui/react";

function SocialButton({ href, children }) {
  return (
    <IconButton bg="none" as={Link} isExternal href={href} icon={children} />
  );
}

function Socials({
  twitter = false,
  github = false,
  instagram = false,
  behance = false,
  codepen = false,
  envato = false,
  ...props
}) {
  return (
    <HStack {...props}>
      {twitter && (
        <SocialButton href={SiteConfig.social.twitter}>
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={20}
            height={20}
          >
            <title>Twitter icon</title>
            <path
              fill="currentColor"
              d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
            />
          </svg>
        </SocialButton>
      )}
      {instagram && (
        <SocialButton href={SiteConfig.social.instagram}>
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={20}
            height={20}
          >
            <title>Instagram icon</title>
            <path
              fill="currentColor"
              d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
            />
          </svg>
        </SocialButton>
      )}
      {github && (
        <SocialButton href={SiteConfig.social.github}>
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={20}
            height={20}
          >
            <title>GitHub icon</title>
            <path
              fill="currentColor"
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            />
          </svg>
        </SocialButton>
      )}
      {behance && (
        <SocialButton href={SiteConfig.social.behance}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 576 512"
            width={20}
            height={20}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"></path>
          </svg>
        </SocialButton>
      )}
      {codepen && (
        <SocialButton href={SiteConfig.social.codepen}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            width={20}
            height={20}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path>
          </svg>
        </SocialButton>
      )}
      {envato && (
        <SocialButton href={SiteConfig.social.envato}>
          <svg
            width={20}
            height={20}
            viewBox="0 0 34 38"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.0803 1.19714C25.3637 0.712074 27.6259 1.07281 29.1202 2.83296C30.3279 4.2549 31.4488 7.07247 32.1674 10.3535C32.8963 13.6815 33.2498 17.6605 32.8013 21.5179C32.3536 25.3691 31.0956 29.181 28.5241 32.0738C25.9271 34.9953 22.0809 36.8763 16.6847 36.9988L16.6789 36.999L16.6731 36.999C14.6076 37.0223 12.5593 36.6324 10.6461 35.8487C8.73328 35.0652 6.99692 33.9061 5.53683 32.4378C4.07719 30.97 2.92351 29.2249 2.1454 27.3025C1.3663 25.3818 0.978439 23.3259 1.00092 21.2528C1.00299 20.2772 1.09547 19.3035 1.27657 18.3459L1.27692 18.3441C1.46019 17.3844 1.73241 16.4445 2.08991 15.5352L2.09054 15.5336C2.44964 14.6248 2.89095 13.7524 3.41288 12.9258C3.93164 12.1043 4.52471 11.3335 5.18689 10.6227C5.43655 10.343 5.76734 10.1706 6.1133 10.1105L6.11582 10.1101L6.11835 10.1097C6.87746 9.98183 7.61839 10.4117 7.88641 11.1338C8.01745 11.485 8.01985 11.8641 7.90519 12.2096C7.63389 13.0255 7.43854 13.8664 7.32398 14.7185C7.2092 15.5722 7.17367 16.4341 7.22009 17.2919C7.26662 18.1518 7.39216 19.0042 7.59785 19.8384C7.64848 20.0434 7.70381 20.2472 7.76375 20.4496C8.33403 14.0203 11.9629 8.43731 16.0711 4.94624C18.3297 3.02695 20.7997 1.68159 23.0803 1.19714ZM17.3862 6.49803C13.2143 10.0433 9.66092 15.8686 9.71915 22.3599L9.71928 22.3747L9.71899 22.3894C9.71494 22.5929 9.67447 22.8033 9.58749 23.0075C9.5068 23.2006 9.38812 23.3813 9.23297 23.5355C9.0794 23.6913 8.89918 23.8109 8.70612 23.8923C8.50203 23.98 8.29142 24.0208 8.08771 24.0249L8.07752 24.0251H8.06732C7.91517 24.0251 7.77202 24.0028 7.64204 23.9673C7.48881 23.9272 7.35585 23.8669 7.24264 23.8007C7.12699 23.7338 7.01673 23.6515 6.91714 23.5557L6.90935 23.5482L6.90172 23.5405C6.8128 23.4512 6.72554 23.3444 6.65052 23.2203L6.6198 23.1695L6.5952 23.1154C6.18661 22.2179 5.86134 21.2844 5.62486 20.3272C5.38799 19.3666 5.2439 18.3871 5.1906 17.402C5.13718 16.4147 5.17819 15.425 5.30969 14.4469C5.35192 14.1328 5.40366 13.8202 5.46473 13.5096C5.3498 13.6749 5.23845 13.8429 5.13075 14.0135C4.67777 14.7309 4.29387 15.4893 3.98079 16.2815C3.66963 17.0731 3.43283 17.8908 3.27337 18.7255C3.11543 19.5609 3.03492 20.4104 3.03337 21.2612L3.03337 21.266L3.03331 21.2707C3.01318 23.0765 3.35076 24.866 4.02859 26.5369C4.70479 28.2076 5.70786 29.7254 6.97703 31.0017C8.24585 32.2776 9.75422 33.2845 11.4156 33.965C13.0749 34.6446 14.8517 34.9834 16.6446 34.964C21.5467 34.8513 24.8308 33.1675 27.006 30.7205C29.2076 28.2439 30.364 24.8821 30.7825 21.2825C31.2003 17.6889 30.8721 13.9399 30.1821 10.7896C29.4819 7.59231 28.4467 5.18136 27.572 4.15157C26.7333 3.16357 25.3582 2.79377 23.502 3.18808C21.6428 3.58302 19.4706 4.72678 17.3862 6.49803Z"
              fill="currentColor"
              stroke="currentColor"
            />
          </svg>
        </SocialButton>
      )}
    </HStack>
  );
}

export default Socials;
