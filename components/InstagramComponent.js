import Image from "next/image";

// style
import style from "../styles/InstagramSection.module.css";

const InstagramSection = () => {
  return (
    <section className={style.container}>
      <div className={style.contentContainer}>
        <h2 className={style.contentHead}>Instagram</h2>
        <Image src="/images/arrow-down.svg" alt="logo" width={36} height={36} />
      </div>
      <div className={style.imageContainer}>
        <div className={style.image}>Image</div>
        <div className={style.image}>Image</div>
        <div className={style.image}>Image</div>
        <div className={style.image}>Image</div>
      </div>
    </section>
  );
};

export default InstagramSection;

// export async function getStaticProps(context) {
//   // create a new client to communicate with  Instagram
//   // this service requires authentication
//   //with username and password parameters
//   const client = new Instagram({
//     username: process.env.local.IG_USERNAME,
//     password: process.env.local.IG_PASSWORD,
//   });

//   let images = [];
//   try {
//     // attempt to log in to Instagram
//     await client.login();
//   } catch (err) {
//     // throw an error if login to Instagram fails
//     console.log("Something went wrong while logging into Instagram", err);
//   }

//   return {
//     props: {
//       instagramPosts: images,
//     },
//   };
// }
