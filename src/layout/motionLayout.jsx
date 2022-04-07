import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function MotionLayout() {
  const firstSectionDragPosition = useMotionValue(250);

  const [firstComponentHeight, setFirstComponentHeight] = useState(
    firstSectionDragPosition.current
  );
  useEffect(() => {
    firstSectionDragPosition.onChange(() => {
      setFirstComponentHeight(firstSectionDragPosition.current);
    });
  }, [firstSectionDragPosition]);

  const secondSectionDragPosition = useMotionValue(firstComponentHeight);
  const [secondComponentHeight, setSecondComponentHeight] = useState(
    secondSectionDragPosition.current
  );
  useEffect(() => {
    secondSectionDragPosition.onChange(() => {
      setSecondComponentHeight(secondSectionDragPosition.current);
    });
  }, [secondSectionDragPosition]);

  return (
    <>
      <div
        style={{ width: "100vw", height: "100vh", background: "lightgreen" }}>
        {/* SECTION 1 */}
        <motion.div
          style={{
            width: "100%",
            height: firstComponentHeight,
            background: "orange",
            position: "relative",
          }}>
          <motion.div
            drag={"y"}
            dragMomentum={false}
            style={{
              position: "absolute",
              width: "100%",
              height: "5px",
              background: "black",
              y: firstSectionDragPosition,
              translateY: "-450%",
            }}></motion.div>
        </motion.div>
        {/* SECTION 2 */}
        <motion.div
          style={{
            width: "100%",
            height: secondComponentHeight,
            background: "blue",
            position: "relative",
          }}>
          <motion.div
            drag={"y"}
            dragMomentum={false}
            style={{
              position: "absolute",
              width: "100%",
              height: "5px",
              background: "red",
              y: secondSectionDragPosition,
              translateY: "-100%",
            }}></motion.div>
        </motion.div>
        {/* SECTION 3 */}
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            background: "yellow",
            position: "relative",
          }}></motion.div>
      </div>
    </>
  );
}
