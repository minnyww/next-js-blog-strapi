import Layout from "../components/Layout";

export default function Home() {
   return (
      <Layout>
         <div className="container-sm">
            <div style={{ margin: "18px" }}>
               <h4>Hi there, I'm Apisit Amnuayworrabut</h4>
               <p>
                  I’m currently working on Edtech Startup - Vonder Thailand
                  (2019 - Now)
               </p>
               <h4>Skills</h4>
               <ul>
                  <li>React</li>
                  <li>Nextjs </li>
                  <li>Vuejs</li>
                  <li>Cypress</li>
                  <li>Styled Components</li>
                  <li>Firebase (firestore, hosting, cloud function)</li>
                  <li>Nodejs</li>
                  <li>Express</li>
               </ul>
               <h4>CSS Framework</h4>
               <ul>
                  <li>Ant Design</li>
                  <li>Material Ui</li>
               </ul>
            </div>
         </div>
      </Layout>
   );
}
