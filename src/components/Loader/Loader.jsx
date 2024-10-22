import { DNA } from "react-loader-spinner";
import s from "./Loader.module.css";
import { useEffect, useState } from "react";

const Loader = () => {
  const [visible, setVisible]=useState(true)
  useEffect(()=>{
    const timer=setTimeout(()=>{
      setVisible(false)
    }, 3000)
    return()=>clearTimeout(timer)
  }, [])
  return (
    <div className={s.loaderWraper}>
      <DNA
        visible={visible}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        
      />
    </div>
  );
};

export default Loader;
