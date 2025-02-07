import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../components/CustomCursor.module.css"

function CustomCursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursor({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ height: "100vh" }}>
      {/* カスタムカーソル */}
      <motion.div
        className={styles.customCursor}
        animate={{
          x: cursor.x - 20,  // カーソルの中心を合わせる
          y: cursor.y - 20,
        }}
        transition={{
          type: "spring",
          stiffness: 50,  // 低いほど"重く"なる
          damping: 15,    // 反発を抑える
        }}
      />
    </div>
  );
}

export default CustomCursor;
