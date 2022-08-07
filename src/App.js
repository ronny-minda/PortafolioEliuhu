
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import { AnimatePresence, motion } from "framer-motion"


const App = () => {

    return (
      <AnimatePresence initial={true} exitBeforeEnter>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >

            <Header />
            <Main />
            <Footer />

          </motion.div>
        </AnimatePresence>
    )
}

export default App;