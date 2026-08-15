export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black py-24 text-white">
      <div className="mx-auto flex max-w-[1512px] flex-col items-center gap-8 px-6 text-center">
        <h2 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
          Get In Touch
        </h2>
        <a
          href="mailto:depurimanoj019@gmail.com"
          className="font-display text-lg font-bold underline decoration-1 underline-offset-4 sm:text-xl"
        >
          depurimanoj019@gmail.com
        </a>
        <button
          type="button"
          onClick={scrollToTop}
          className="mt-6 flex items-center gap-3 font-display text-lg font-bold transition-opacity hover:opacity-70 sm:text-2xl"
        >
          <svg
            width="21"
            height="17"
            viewBox="0 0 21 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-5 fill-white sm:h-5 sm:w-6"
          >
            <path d="M0.496408 7.31173L7.40934 0.517512C7.56491 0.35663 7.75166 0.227973 7.9586 0.139119C8.16554 0.0502645 8.38848 0.00301022 8.61429 0.00013919C8.8401 -0.00273184 9.06421 0.0388385 9.27342 0.122401C9.48263 0.205964 9.67271 0.32983 9.83246 0.486703C9.99222 0.643576 10.1184 0.830283 10.2036 1.03583C10.2888 1.24137 10.3313 1.4616 10.3286 1.68353C10.3259 1.90546 10.278 2.12461 10.1878 2.32808C10.0975 2.53154 9.9668 2.71521 9.80324 2.86825L5.7168 6.87832H19.3075C19.7564 6.87832 20.1869 7.05358 20.5043 7.36554C20.8217 7.6775 21 8.10061 21 8.54179C21 8.98297 20.8217 9.40608 20.5043 9.71804C20.1869 10.03 19.7564 10.2053 19.3075 10.2053H5.7546L9.80324 14.1906C10.1074 14.5051 10.2745 14.9241 10.2688 15.358C10.2631 15.792 10.085 16.2066 9.77267 16.5133C9.4603 16.82 9.03833 16.9946 8.5968 16.9999C8.15527 17.0051 7.72914 16.8405 7.40934 16.5413L0.496408 9.74708C0.33869 9.593 0.213669 9.40967 0.128597 9.20772C0.0435257 9.00578 9.72748e-05 8.78925 0.000827789 8.57069C-0.000276566 8.55695 -0.000276566 8.54315 0.000827789 8.52941C-0.000165939 8.51567 -0.000165939 8.50187 0.000827789 8.48813C0.00097847 8.04697 0.179211 7.62388 0.496408 7.31173Z" />
          </svg>
          Back to top
        </button>
      </div>
    </footer>
  );
}
