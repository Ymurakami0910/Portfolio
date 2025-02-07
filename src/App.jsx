import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// import all pages that website contains 
import Layout from './components/layout';
import Home from './pages/home';
import Projects from './pages/project';
import About from './pages/about';
import Contact from './pages/contact';
import KissaTanpopo from './project/KissaTanpopo';
import Celestial from './project/Celestial';
import CraftedCorners from './project/CraftedCorner';
import Blenz from './project/Blenz';

// slick slider css for project page 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Lenisのインスタンスを作成
    const lenis = new Lenis({
      autoRaf: true, // 自動でリクエストアニメーションフレームを更新
      duration: 2,   // スクロールアニメーションの遅さを調整（デフォルトは1、2にすると遅くなる）
    });

    // LenisのスクロールイベントをScrollTriggerに更新する
    lenis.on('scroll', ScrollTrigger.update);

    // GSAPのtickerでLenisのrafメソッドを使ってスクロールのアニメーションを更新
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // 秒からミリ秒に変換
    });

    // スクロールのラグを無効にする（遅延を防ぐ）
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy(); // コンポーネントがアンマウントされたときにクリーンアップ
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project/kissa-tanpopo" element={<KissaTanpopo/>} />
          <Route path="project/celestial" element={< Celestial/>} />
          <Route path="project/craftedCorners" element={< CraftedCorners/>} />
          <Route path="project/redesign" element={< Blenz/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
