import Footer from "@/components/footer/footer.component";
import CatNavModal from "@/components/modals/cat-nav/cat-nav.modal";
import Loading from "@/components/modals/loading/loading.modal";
import Navbar from "@/components/navbar/navbar.component";
import BottomPromo from "@/components/promo/bottom-promo/bottom-promo.component";
import HamSidebar from "@/components/sidebar/ham-sidebar/ham-sidebar.component";
import SearchSidebar from "@/components/sidebar/search-sidebar/search-sidebar.component";
import Warning from "@/components/warning/warning.component";
import EssentialContextsProvider from "@/context/essential.context";
import RouteObserver from "@/lib/route-observer";
import "@/styles/globals.css";
import "swiper/css";

console.log("Can you like the repo please ?, --Uncor3");

export default function App({ Component, pageProps }) {
  return (
    <EssentialContextsProvider
      bag={pageProps.bag}
      SEARCH_DATA={pageProps.SEARCH_DATA}
    >
      <Navbar />
      <HamSidebar />
      <SearchSidebar />
      <CatNavModal />
      <BottomPromo />
      <Warning />
      <Component {...pageProps} />
      <RouteObserver />
      <Loading/>
      <Footer />
    </EssentialContextsProvider>
  );
}
