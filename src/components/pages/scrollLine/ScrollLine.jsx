// import styles from './ScrollLine.module.scss'
// import { useState, useEffect, useRef } from 'react'

// export default function ScrollLine() {
//   const [showHorizontalLines, setShowHorizontalLines] = useState([false, false, false, false, false, false]) // 가로선 상태
//   const [showVerticalLines, setShowVerticalLines] = useState([false, false]) // 세로선 상태
//   const sectionsRefs = useRef([]) // 각 섹션을 참조할 배열

//   // Intersection Observer로 섹션이 보일 때 애니메이션을 트리거
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = Number(entry.target.dataset.index)

//             // 가로선 표시
//             setShowHorizontalLines((prev) => prev.map((val, i) => (i === index ? true : val)))

//             // 세로선 표시
//             if (index === 0 || index === 1) {
//               setShowVerticalLines((prev) => prev.map((val, i) => (i === index ? true : val)))
//             }
//           }
//         })
//       },
//       { threshold: 0.5 } // 50% 이상 보이면 트리거
//     )

//     // 각 섹션을 observer로 관찰
//     sectionsRefs.current.forEach((section) => {
//       if (section instanceof Element) {
//         // 🔥 섹션이 DOM 엘리먼트인지 확인
//         observer.observe(section)
//       }
//     })

//     return () => {
//       // 컴포넌트가 언마운트될 때 observer 정리
//       if (sectionsRefs.current) {
//         sectionsRefs.current.forEach((section) => {
//           if (section instanceof Element) {
//             // 🔥 섹션이 DOM 엘리먼트인지 확인
//             observer.unobserve(section)
//           }
//         })
//       }
//     }
//   }, [])

//   return (
//     <div className={styles.main}>
//       {/* 헤더 영역 */}
//       <header className={styles.header}>
//         <div className={styles.logo}>Line</div>
//         {/* 첫 번째 가로선 */}
//         {showHorizontalLines[0] && <div className={styles.animatedLine}></div>}
//       </header>

//       <main>
//         {/* 첫 번째 섹션 */}
//         <section ref={(el) => (sectionsRefs.current[0] = el)} className={styles.content} data-index="0">
//           <div className={styles.contentRow}>
//             <div className={styles.column}>
//               <h3>BRANDING</h3>
//               <p>We craft compelling brand identities that leave a lasting impression.</p>
//             </div>

//             {/* 첫 번째 세로선 */}
//             {showVerticalLines[0] && <div className={styles.verticalLineColumn}></div>}

//             <div className={styles.column}>
//               <h3>DESIGN</h3>
//               <p>Innovative and aesthetic designs that bring your ideas to life.</p>
//             </div>
//           </div>
//         </section>

//         {/* 두 번째 가로선 */}
//         {showHorizontalLines[1] && <div className={styles.animatedLine}></div>}

//         {/* 두 번째 섹션 */}
//         <section ref={(el) => (sectionsRefs.current[1] = el)} className={styles.content} data-index="1">
//           <div className={styles.contentRow}>
//             <div className={styles.column}>
//               <h3>VIDEO</h3>
//               <p>Captivating visual storytelling that engages and resonates with your audience.</p>
//             </div>

//             {/* 두 번째 세로선 */}
//             {showVerticalLines[1] && <div className={styles.verticalLineColumn}></div>}

//             <div className={styles.column}>
//               <h3>CONTENT</h3>
//               <p>
//                 Engaging and persuasive content that captures attention and sparks meaningful connections. Engaging and
//                 persuasive content that captures attention and sparks meaningful connections. Engaging and persuasive
//                 content that captures attention and sparks meaningful connections. Engaging and persuasive content that
//                 captures attention and sparks meaningful connections.
//                 <br />
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* 세 번째 가로선 */}
//         {showHorizontalLines[2] && <div className={styles.animatedLine}></div>}

//         {/* 세 번째 섹션 */}
//         <section ref={(el) => (sectionsRefs.current[2] = el)} className={styles.content} data-index="2">
//           <div className={styles.contentColumn}>
//             <div className={styles.column}>
//               <h3>IMAGES</h3>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore suscipit explicabo tempora itaque,
//                 vitae, alias nam labore minus accusamus, deleniti ullam earum officiis quod! Aperiam ea facilis
//                 laboriosam, dignissimos sunt officia sed eum a error illo consequatur totam deleniti repellat recusandae
//                 laborum quisquam facere odio qui culpa, possimus nulla blanditiis rem ipsa? Nobis esse labore
//                 consequuntur, veritatis, voluptatibus consectetur fugit, quia velit excepturi architecto ipsa rerum
//                 temporibus. Ex exercitationem delectus inventore quasi tempore excepturi, amet nihil ab, reiciendis
//                 recusandae vero repellat. Necessitatibus optio, asperiores voluptate voluptatibus, perspiciatis
//                 dignissimos debitis, quas velit eligendi fugit ullam eaque reprehenderit illo ipsum magni reiciendis
//                 delectus aliquid esse et inventore expedita consectetur. Voluptatibus commodi, at doloremque porro nisi
//                 aliquam voluptates neque amet nostrum dolorum saepe beatae iusto consectetur iure facere quod expedita,
//                 nesciunt voluptatem aspernatur molestias fuga. Assumenda iusto ut, consectetur ullam alias unde
//                 accusamus vitae expedita aspernatur vel id ipsum doloremque similique debitis placeat illum nemo?
//                 Tenetur quos aliquid eius quae temporibus? Facilis tenetur sed illum reiciendis, vitae natus quasi rem
//                 incidunt ab veniam aspernatur temporibus inventore, aliquid cupiditate dolores. Dolorum velit nulla enim
//                 eum. Quae, optio veniam reiciendis neque unde possimus expedita ad soluta consequuntur deserunt, officia
//                 maxime assumenda animi est laborum laboriosam beatae harum commodi.
//                 <br />
//                 <br />
//                 Quo quos reprehenderit officia nam at dolorem consectetur accusantium facilis maiores sed corrupti,
//                 tempora nemo architecto numquam alias molestiae, perspiciatis aliquam iste? Sed sint, dolore aspernatur
//                 illum delectus eos cum quidem, earum reiciendis aperiam sunt dolores ex molestias perspiciatis
//                 asperiores. Voluptatibus dolore excepturi recusandae incidunt eos et vel reiciendis vero magni quos
//                 magnam officiis eum, saepe aliquid doloremque deleniti illum odio. Sed voluptatibus eos a nihil amet,
//                 illum, recusandae corrupti vero veniam eveniet exercitationem iste rem nobis impedit magni corporis
//                 consequuntur enim fugiat minima molestiae nemo quo est? Consequatur omnis temporibus at, odio qui
//                 repellat consectetur unde?
//                 <br />
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod, sequi alias consectetur
//                 aspernatur nam ipsum repellendus minus laborum, voluptatem, vitae distinctio pariatur similique nihil
//                 repudiandae totam maxime quo? Doloremque laborum eius ducimus deserunt, dicta quae officia molestiae
//                 repellat error quos! Magni nihil odio ab nesciunt dolore impedit voluptates a accusantium repudiandae
//                 explicabo officiis quam similique, inventore deleniti ut error nemo?
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* 다른 섹션들 및 가로선 */}
//         {showHorizontalLines[3] && <div className={styles.animatedLine}></div>}
//         {/* 필요한 만큼 다른 섹션 추가 */}

//         <section ref={(el) => (sectionsRefs.current[3] = el)} className={styles.content} data-index="3">
//           <div className={styles.contentColumn}>
//             <div className={styles.column}>
//               <h3>CONTENT</h3>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore suscipit explicabo tempora itaque,
//                 vitae, alias nam labore minus accusamus, deleniti ullam earum officiis quod! Aperiam ea facilis
//                 laboriosam, dignissimos sunt officia sed eum a error illo consequatur totam deleniti repellat recusandae
//                 laborum quisquam facere odio qui culpa, possimus nulla blanditiis rem ipsa? Nobis esse labore
//                 consequuntur, veritatis, voluptatibus consectetur fugit, quia velit excepturi architecto ipsa rerum
//                 temporibus. Ex exercitationem delectus inventore quasi tempore excepturi, amet nihil ab, reiciendis
//                 recusandae vero repellat. Necessitatibus optio, asperiores voluptate voluptatibus, perspiciatis
//                 dignissimos debitis, quas velit eligendi fugit ullam eaque reprehenderit illo ipsum magni reiciendis
//                 delectus aliquid esse et inventore expedita consectetur. Voluptatibus commodi, at doloremque porro nisi
//                 aliquam voluptates neque amet nostrum dolorum saepe beatae iusto consectetur iure facere quod expedita,
//                 nesciunt voluptatem aspernatur molestias fuga. Assumenda iusto ut, consectetur ullam alias unde
//                 accusamus vitae expedita aspernatur vel id ipsum doloremque similique debitis placeat illum nemo?
//                 Tenetur quos aliquid eius quae temporibus?
//                 <br />
//                 <br />
//                 Facilis tenetur sed illum reiciendis, vitae natus quasi rem incidunt ab veniam aspernatur temporibus
//                 inventore, aliquid cupiditate dolores. Dolorum velit nulla enim eum. Quae, optio veniam reiciendis neque
//                 unde possimus expedita ad soluta consequuntur deserunt, officia maxime assumenda animi est laborum
//                 laboriosam beatae harum commodi. Quo quos reprehenderit officia nam at dolorem consectetur accusantium
//                 facilis maiores sed corrupti, tempora nemo architecto numquam alias molestiae, perspiciatis aliquam
//                 iste? Sed sint, dolore aspernatur illum delectus eos cum quidem, earum reiciendis aperiam sunt dolores
//                 ex molestias perspiciatis asperiores. Voluptatibus dolore excepturi recusandae incidunt eos et vel
//                 reiciendis vero magni quos magnam officiis eum, saepe aliquid doloremque deleniti illum odio. Sed
//                 voluptatibus eos a nihil amet, illum, recusandae corrupti vero veniam eveniet exercitationem iste rem
//                 nobis impedit magni corporis consequuntur enim fugiat minima molestiae nemo quo est? Consequatur omnis
//                 temporibus at, odio qui repellat consectetur unde?
//                 <br />
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod, sequi alias consectetur
//                 aspernatur nam ipsum repellendus minus laborum, voluptatem, vitae distinctio pariatur similique nihil
//                 repudiandae totam maxime quo? Doloremque laborum eius ducimus deserunt, dicta quae officia molestiae
//                 repellat error quos! Magni nihil odio ab nesciunt dolore impedit voluptates a accusantium repudiandae
//                 explicabo officiis quam similique, inventore deleniti ut error nemo?
//               </p>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   )
// }

import styles from './ScrollLine.module.scss'
import { useScrollLineObserver } from './useScrollLineObserver' // import custom hook

export default function ScrollLine() {
  const { sectionsRefs, showHorizontalLines, showVerticalLines } = useScrollLineObserver()

  return (
    <div className={styles.main}>
      {/* 헤더 영역 */}
      <header className={styles.header}>
        <div className={styles.logo}>Line</div>
        {/* 첫 번째 가로선 */}
        {showHorizontalLines[0] && <div className={styles.animatedLine}></div>}
      </header>

      <main>
        {/* 첫 번째 섹션 */}
        <section ref={(el) => (sectionsRefs.current[0] = el)} className={styles.content} data-index="0">
          <div className={styles.contentRow}>
            <div className={styles.column}>
              <h3>BRANDING</h3>
              <p>We craft compelling brand identities that leave a lasting impression.</p>
            </div>

            {/* 첫 번째 세로선 */}
            {showVerticalLines[0] && <div className={styles.verticalLineColumn}></div>}

            <div className={styles.column}>
              <h3>DESIGN</h3>
              <p>Innovative and aesthetic designs that bring your ideas to life.</p>
            </div>
          </div>
        </section>

        {/* 두 번째 가로선 */}
        {showHorizontalLines[1] && <div className={styles.animatedLine}></div>}

        {/* 두 번째 섹션 */}
        <section ref={(el) => (sectionsRefs.current[1] = el)} className={styles.content} data-index="1">
          <div className={styles.contentRow}>
            <div className={styles.column}>
              <h3>VIDEO</h3>
              <p>Captivating visual storytelling that engages and resonates with your audience.</p>
            </div>

            {/* 두 번째 세로선 */}
            {showVerticalLines[1] && <div className={styles.verticalLineColumn}></div>}

            <div className={styles.column}>
              <h3>CONTENT</h3>
              <p>Engaging and persuasive content that captures attention and sparks meaningful connections.</p>
            </div>
          </div>
        </section>

        {/* 세 번째 가로선 */}
        {showHorizontalLines[2] && <div className={styles.animatedLine}></div>}

        {/* 세 번째 섹션 */}
        <section ref={(el) => (sectionsRefs.current[2] = el)} className={styles.content} data-index="2">
          <div className={styles.contentColumn}>
            <div className={styles.column}>
              <h3>IMAGES</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore suscipit explicabo tempora itaque,
                vitae, alias nam labore minus accusamus, deleniti ullam earum officiis quod! Aperiam ea facilis
                laboriosam, dignissimos sunt officia sed eum a error illo consequatur totam deleniti repellat recusandae
                laborum quisquam facere odio qui culpa, possimus nulla blanditiis rem ipsa? Nobis esse labore
                consequuntur, veritatis, voluptatibus consectetur fugit, quia velit excepturi architecto ipsa rerum
                temporibus. Ex exercitationem delectus inventore quasi tempore excepturi, amet nihil ab, reiciendis
                recusandae vero repellat. Necessitatibus optio, asperiores voluptate voluptatibus, perspiciatis
                dignissimos debitis, quas velit eligendi fugit ullam eaque reprehenderit illo ipsum magni reiciendis
                delectus aliquid esse et inventore expedita consectetur. Voluptatibus commodi, at doloremque porro nisi
                aliquam voluptates neque amet nostrum dolorum saepe beatae iusto consectetur iure facere quod expedita,
                nesciunt voluptatem aspernatur molestias fuga. Assumenda iusto ut, consectetur ullam alias unde
                accusamus vitae expedita aspernatur vel id ipsum doloremque similique debitis placeat illum nemo?
                Tenetur quos aliquid eius quae temporibus?
                <br />
                <br />
                Facilis tenetur sed illum reiciendis, vitae natus quasi rem incidunt ab veniam aspernatur temporibus
                inventore, aliquid cupiditate dolores. Dolorum velit nulla enim eum. Quae, optio veniam reiciendis neque
                unde possimus expedita ad soluta consequuntur deserunt, officia maxime assumenda animi est laborum
                laboriosam beatae harum commodi. Quo quos reprehenderit officia nam at dolorem consectetur accusantium
                facilis maiores sed corrupti, tempora nemo architecto numquam alias molestiae, perspiciatis aliquam
                iste? Sed sint, dolore aspernatur illum delectus eos cum quidem, earum reiciendis aperiam sunt dolores
                ex molestias perspiciatis asperiores. Voluptatibus dolore excepturi recusandae incidunt eos et vel
                reiciendis vero magni quos magnam officiis eum, saepe aliquid doloremque deleniti illum odio. Sed
                voluptatibus eos a nihil amet, illum, recusandae corrupti vero veniam eveniet exercitationem iste rem
                nobis impedit magni corporis consequuntur enim fugiat minima molestiae nemo quo est? Consequatur omnis
                temporibus at, odio qui repellat consectetur unde?
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod, sequi alias consectetur
                aspernatur nam ipsum repellendus minus laborum, voluptatem, vitae distinctio pariatur similique nihil
                repudiandae totam maxime quo? Doloremque laborum eius ducimus deserunt, dicta quae officia molestiae
                repellat error quos! Magni nihil odio ab nesciunt dolore impedit voluptates a accusantium repudiandae
                explicabo officiis quam similique, inventore deleniti ut error nemo?
              </p>
            </div>
          </div>
        </section>

        {/* 추가 섹션들 */}
        {showHorizontalLines[3] && <div className={styles.animatedLine}></div>}
        <section ref={(el) => (sectionsRefs.current[3] = el)} className={styles.content} data-index="3">
          <div className={styles.contentColumn}>
            <div className={styles.column}>
              <h3>CONTENT</h3>
              <p>
                <img src="https://placehold.co/1200x800" alt="" />
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore suscipit explicabo tempora itaque,
                vitae, alias nam labore minus accusamus, deleniti ullam earum officiis quod!
                <br />
                <br />
                Aperiam ea facilis laboriosam, dignissimos sunt officia sed eum a error illo consequatur totam deleniti
                repellat recusandae laborum quisquam facere odio qui culpa, possimus nulla blanditiis rem ipsa? Nobis
                esse labore consequuntur, veritatis, voluptatibus consectetur fugit, quia velit excepturi architecto
                ipsa rerum temporibus. Ex exercitationem delectus inventore quasi tempore excepturi, amet nihil ab,
                reiciendis recusandae vero repellat. Necessitatibus optio, asperiores voluptate voluptatibus,
                perspiciatis dignissimos debitis, quas velit eligendi fugit ullam eaque reprehenderit illo ipsum magni
                reiciendis delectus aliquid esse et inventore expedita consectetur. Voluptatibus commodi, at doloremque
                porro nisi aliquam voluptates neque amet nostrum dolorum saepe beatae iusto consectetur iure facere quod
                expedita, nesciunt voluptatem aspernatur molestias fuga. Assumenda iusto ut, consectetur ullam alias
                unde accusamus vitae expedita aspernatur vel id ipsum doloremque similique debitis placeat illum nemo?
                Tenetur quos aliquid eius quae temporibus?
                <br />
                <br />
                Facilis tenetur sed illum reiciendis, vitae natus quasi rem incidunt ab veniam aspernatur temporibus
                inventore, aliquid cupiditate dolores. Dolorum velit nulla enim eum. Quae, optio veniam reiciendis neque
                unde possimus expedita ad soluta consequuntur deserunt, officia maxime assumenda animi est laborum
                laboriosam beatae harum commodi. Quo quos reprehenderit officia nam at dolorem consectetur accusantium
                facilis maiores sed corrupti, tempora nemo architecto numquam alias molestiae, perspiciatis aliquam
                iste? Sed sint, dolore aspernatur illum delectus eos cum quidem, earum reiciendis aperiam sunt dolores
                ex molestias perspiciatis asperiores. Voluptatibus dolore excepturi recusandae incidunt eos et vel
                reiciendis vero magni quos magnam officiis eum, saepe aliquid doloremque deleniti illum odio. Sed
                voluptatibus eos a nihil amet, illum, recusandae corrupti vero veniam eveniet exercitationem iste rem
                nobis impedit magni corporis consequuntur enim fugiat minima molestiae nemo quo est? Consequatur omnis
                temporibus at, odio qui repellat consectetur unde?
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod, sequi alias consectetur
                aspernatur nam ipsum repellendus minus laborum, voluptatem, vitae distinctio pariatur similique nihil
                repudiandae totam maxime quo? Doloremque laborum eius ducimus deserunt, dicta quae officia molestiae
                repellat error quos! Magni nihil odio ab nesciunt dolore impedit voluptates a accusantium repudiandae
                explicabo officiis quam similique, inventore deleniti ut error nemo?
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod, sequi alias consectetur
                aspernatur nam ipsum repellendus minus laborum, voluptatem, vitae distinctio pariatur similique nihil
                repudiandae totam maxime quo? Doloremque laborum eius ducimus deserunt, dicta quae officia molestiae
                repellat error quos! Magni nihil odio ab nesciunt dolore impedit voluptates a accusantium repudiandae
                explicabo officiis quam similique, inventore deleniti ut error nemo?
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod, sequi alias consectetur
                aspernatur nam ipsum repellendus minus laborum, voluptatem, vitae distinctio pariatur similique nihil
                repudiandae totam maxime quo? Doloremque laborum eius ducimus deserunt, dicta quae officia molestiae
                repellat error quos! Magni nihil odio ab nesciunt dolore impedit voluptates a accusantium repudiandae
                explicabo officiis quam similique, inventore deleniti ut error nemo?
              </p>
            </div>
          </div>
        </section>

        {/* 추가 섹션들 */}
        {showHorizontalLines[4] && <div className={styles.animatedLine}></div>}
        <section ref={(el) => (sectionsRefs.current[4] = el)} className={styles.content} data-index="4">
          <div className={styles.contentColumn}>
            <div className={styles.column}>
              <h3>CONTENT</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore suscipit explicabo tempora itaque,
                vitae, alias nam labore minus accusamus, deleniti ullam earum officiis quod! Aperiam ea facilis
                laboriosam, dignissimos sunt officia sed eum a error illo consequatur totam deleniti repellat recusandae
                laborum quisquam facere odio qui culpa, possimus nulla blanditiis rem ipsa? Nobis esse labore
                consequuntur, veritatis, voluptatibus consectetur fugit, quia velit excepturi architecto ipsa rerum
                temporibus. Ex exercitationem delectus inventore quasi tempore excepturi, amet nihil ab, reiciendis
                recusandae vero repellat. Necessitatibus optio, asperiores voluptate voluptatibus, perspiciatis
                dignissimos debitis, quas velit eligendi fugit ullam eaque reprehenderit illo ipsum magni reiciendis
                delectus aliquid esse et inventore expedita consectetur. Voluptatibus commodi, at doloremque porro nisi
                aliquam voluptates neque amet nostrum dolorum saepe beatae iusto consectetur iure facere quod expedita,
                nesciunt voluptatem aspernatur molestias fuga. Assumenda iusto ut, consectetur ullam alias unde
                accusamus vitae expedita aspernatur vel id ipsum doloremque similique debitis placeat illum nemo?
                Tenetur quos aliquid eius quae temporibus?
                <br />
                <br />
                Facilis tenetur sed illum reiciendis, vitae natus quasi rem incidunt ab veniam aspernatur temporibus
                inventore, aliquid cupiditate dolores. Dolorum velit nulla enim eum. Quae, optio veniam reiciendis neque
                unde possimus expedita ad soluta consequuntur deserunt, officia maxime assumenda animi est laborum
                laboriosam beatae harum commodi. Quo quos reprehenderit officia nam at dolorem consectetur accusantium
                facilis maiores sed corrupti, tempora nemo architecto numquam alias molestiae, perspiciatis aliquam
                iste? Sed sint, dolore aspernatur illum delectus eos cum quidem, earum reiciendis aperiam sunt dolores
                ex molestias perspiciatis asperiores. Voluptatibus dolore excepturi recusandae incidunt eos et vel
                reiciendis vero magni quos magnam officiis eum, saepe aliquid doloremque deleniti illum odio. Sed
                voluptatibus eos a nihil amet, illum, recusandae corrupti vero veniam eveniet exercitationem iste rem
                nobis impedit magni corporis consequuntur enim fugiat minima molestiae nemo quo est? Consequatur omnis
                temporibus at, odio qui repellat consectetur unde?
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod, sequi alias consectetur
                aspernatur nam ipsum repellendus minus laborum, voluptatem, vitae distinctio pariatur similique nihil
                repudiandae totam maxime quo? Doloremque laborum eius ducimus deserunt, dicta quae officia molestiae
                repellat error quos! Magni nihil odio ab nesciunt dolore impedit voluptates a accusantium repudiandae
                explicabo officiis quam similique, inventore deleniti ut error nemo?
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
