import styles from "./theme-image.module.css";
import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "src" | "priority" | "loading"> & {
  srclight: string;
  srcdark: string;
};

const ThemeImage = (props: Props) => {
  const { srclight, srcdark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srclight} className={styles.imgLight} />
      <Image {...rest} src={srcdark} className={styles.imgDark} />
    </>
  );
};
export default ThemeImage;
