import styles from './LineRefactoring.module.scss'
import useAnimationTimers from './useAnimationTimers' // 커스텀 훅을 임포트

export default function LineRefactoring() {
  // 커스텀 훅 사용 (옵션으로 타이밍 설정 가능)
  const { showHorizontalLine, showVerticalLine } = useAnimationTimers()

  return (
    <div className={styles.main}>
      {/* 헤더 영역: 로고와 첫 번째 가로선 */}
      <header className={styles.header}>
        <div className={styles.logo}>Line</div>
        {/* 첫 번째 가로선이 보일 때만 렌더링 */}
        {showHorizontalLine && <div className={styles.animatedLine}></div>}
      </header>

      <main>
        {/* 첫 번째 컨텐츠 섹션 (BRANDING과 DESIGN) */}
        <section className={styles.content}>
          <div className={styles.contentRow}>
            <div className={styles.column}>
              <h3>BRANDING</h3>
              <p>We craft compelling brand identities that leave a lasting impression.</p>
            </div>

            {/* 첫 번째 세로선이 보일 때만 렌더링 */}
            {showVerticalLine && <div className={styles.verticalLineColumn}></div>}

            <div className={styles.column}>
              <h3>DESIGN</h3>
              <p>Innovative and aesthetic designs that bring your ideas to life.</p>
            </div>
          </div>
        </section>

        {/* 두 번째 가로선이 보일 때만 렌더링 */}
        {showHorizontalLine && <div className={styles.animatedLine}></div>}

        {/* 두 번째 컨텐츠 섹션 (VIDEO와 CONTENT) */}
        <section className={styles.content}>
          <div className={styles.contentRow}>
            <div className={styles.column}>
              <h3>VIDEO</h3>
              <p>Captivating visual storytelling that engages and resonates with your audience.</p>
            </div>

            {/* 두 번째 세로선이 보일 때만 렌더링 */}
            {showVerticalLine && <div className={styles.verticalLineColumn}></div>}

            <div className={styles.column}>
              <h3>CONTENT</h3>
              <p>Engaging and persuasive content that captures attention and sparks meaningful connections.</p>
            </div>
          </div>
        </section>
        {/* 세 번째 가로선이 보일 때만 렌더링 */}
        {showHorizontalLine && <div className={styles.animatedLine}></div>}

        <section className={styles.content}>
          <div className={styles.contentColumn}>
            <div className={styles.column}>
              <h3>VIDEO</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod, sequi alias consectetur
                aspernatur nam ipsum repellendus minus laborum, voluptatem, vitae distinctio pariatur similique nihil
                repudiandae totam maxime quo? Doloremque laborum eius ducimus deserunt, dicta quae officia molestiae
                repellat error quos! Magni nihil odio ab nesciunt dolore impedit voluptates a accusantium repudiandae
                explicabo officiis quam similique, inventore deleniti ut error nemo? Distinctio rerum minima ducimus
                illo, velit ipsam, nemo optio blanditiis maiores molestias soluta doloremque libero natus exercitationem
                aliquam, et cum consequatur explicabo deleniti nam! Quo aut debitis qui? Mollitia atque, corrupti, minus
                id libero cupiditate incidunt consequuntur neque architecto delectus ad nisi tempore porro
                necessitatibus consectetur explicabo excepturi laudantium qui dolore. Hic suscipit, eum fugiat repellat
                excepturi error voluptates quasi accusamus eligendi iure. Eius provident molestiae officiis in facilis
                commodi tenetur dolor eveniet maxime sint minus, doloribus ut dolore quae suscipit. Debitis a sed
                corporis veniam atque, quo fugiat laborum omnis facilis ea provident quis illum qui eum, porro,
                consectetur maiores eaque explicabo eligendi assumenda optio? Unde at doloribus officia mollitia, nulla
                dolor, suscipit consectetur accusamus doloremque facilis saepe, eligendi alias. Dolores sed animi
                debitis molestiae dignissimos similique quibusdam autem deserunt placeat, qui aperiam magnam
                necessitatibus nisi facilis amet officia, explicabo eos consequatur a minima aspernatur quidem libero
                repellendus in? Cupiditate, mollitia. Iure assumenda veniam hic quam? Nostrum non alias cum doloremque
                suscipit laboriosam, odit facere quae rerum voluptatibus expedita necessitatibus perspiciatis omnis
                corporis, asperiores commodi. Sint illo vitae alias ipsum id! Reiciendis magnam consequatur impedit
                consequuntur et deserunt ad, maxime sunt minus quod sequi provident similique nisi ipsam amet, illum
                molestiae eaque. Blanditiis, autem eveniet, aperiam sit aspernatur culpa iure natus quae recusandae
                explicabo ut debitis repellat aliquam neque molestias vero rem. Et, voluptatibus modi dolorem optio
                incidunt quod! Molestiae unde dolorem voluptate impedit omnis, aut esse cum.
              </p>
            </div>
          </div>
        </section>

        {/* 네 번째 가로선이 보일 때만 렌더링 */}
        {showHorizontalLine && <div className={styles.animatedLine}></div>}

        <section className={styles.content}>
          <div className={styles.contentColumn}>
            <div className={styles.column}>
              <h3>VIDEO</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod, sequi alias consectetur
                aspernatur nam ipsum repellendus minus laborum, voluptatem, vitae distinctio pariatur similique nihil
                repudiandae totam maxime quo? Doloremque laborum eius ducimus deserunt, dicta quae officia molestiae
                repellat error quos! Magni nihil odio ab nesciunt dolore impedit voluptates a accusantium repudiandae
                explicabo officiis quam similique, inventore deleniti ut error nemo? Distinctio rerum minima ducimus
                illo, velit ipsam, nemo optio blanditiis maiores molestias soluta doloremque libero natus exercitationem
                aliquam, et cum consequatur explicabo deleniti nam! Quo aut debitis qui? Mollitia atque, corrupti, minus
                id libero cupiditate incidunt consequuntur neque architecto delectus ad nisi tempore porro
                necessitatibus consectetur explicabo excepturi laudantium qui dolore. Hic suscipit, eum fugiat repellat
                excepturi error voluptates quasi accusamus eligendi iure. Eius provident molestiae officiis in facilis
                commodi tenetur dolor eveniet maxime sint minus, doloribus ut dolore quae suscipit. Debitis a sed
                corporis veniam atque, quo fugiat laborum omnis facilis ea provident quis illum qui eum, porro,
                consectetur maiores eaque explicabo eligendi assumenda optio? Unde at doloribus officia mollitia, nulla
                dolor, suscipit consectetur accusamus doloremque facilis saepe, eligendi alias. Dolores sed animi
                debitis molestiae dignissimos similique quibusdam autem deserunt placeat, qui aperiam magnam
                necessitatibus nisi facilis amet officia, explicabo eos consequatur a minima aspernatur quidem libero
                repellendus in? Cupiditate, mollitia. Iure assumenda veniam hic quam? Nostrum non alias cum doloremque
                suscipit laboriosam, odit facere quae rerum voluptatibus expedita necessitatibus perspiciatis omnis
                corporis, asperiores commodi. Sint illo vitae alias ipsum id! Reiciendis magnam consequatur impedit
                consequuntur et deserunt ad, maxime sunt minus quod sequi provident similique nisi ipsam amet, illum
                molestiae eaque. Blanditiis, autem eveniet, aperiam sit aspernatur culpa iure natus quae recusandae
                explicabo ut debitis repellat aliquam neque molestias vero rem. Et, voluptatibus modi dolorem optio
                incidunt quod! Molestiae unde dolorem voluptate impedit omnis, aut esse cum.
              </p>
            </div>
          </div>
        </section>

        {/* 다섯 번째 가로선이 보일 때만 렌더링 */}
        {showHorizontalLine && <div className={styles.animatedLine}></div>}

        <section className={styles.content}>
          <div className={styles.contentColumn}>
            <div className={styles.column}>
              <h3>VIDEO</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod, sequi alias consectetur
                aspernatur nam ipsum repellendus minus laborum, voluptatem, vitae distinctio pariatur similique nihil
                repudiandae totam maxime quo? Doloremque laborum eius ducimus deserunt, dicta quae officia molestiae
                repellat error quos! Magni nihil odio ab nesciunt dolore impedit voluptates a accusantium repudiandae
                explicabo officiis quam similique, inventore deleniti ut error nemo? Distinctio rerum minima ducimus
                illo, velit ipsam, nemo optio blanditiis maiores molestias soluta doloremque libero natus exercitationem
                aliquam, et cum consequatur explicabo deleniti nam! Quo aut debitis qui? Mollitia atque, corrupti, minus
                id libero cupiditate incidunt consequuntur neque architecto delectus ad nisi tempore porro
                necessitatibus consectetur explicabo excepturi laudantium qui dolore. Hic suscipit, eum fugiat repellat
                excepturi error voluptates quasi accusamus eligendi iure. Eius provident molestiae officiis in facilis
                commodi tenetur dolor eveniet maxime sint minus, doloribus ut dolore quae suscipit. Debitis a sed
                corporis veniam atque, quo fugiat laborum omnis facilis ea provident quis illum qui eum, porro,
                consectetur maiores eaque explicabo eligendi assumenda optio? Unde at doloribus officia mollitia, nulla
                dolor, suscipit consectetur accusamus doloremque facilis saepe, eligendi alias. Dolores sed animi
                debitis molestiae dignissimos similique quibusdam autem deserunt placeat, qui aperiam magnam
                necessitatibus nisi facilis amet officia, explicabo eos consequatur a minima aspernatur quidem libero
                repellendus in? Cupiditate, mollitia. Iure assumenda veniam hic quam? Nostrum non alias cum doloremque
                suscipit laboriosam, odit facere quae rerum voluptatibus expedita necessitatibus perspiciatis omnis
                corporis, asperiores commodi. Sint illo vitae alias ipsum id! Reiciendis magnam consequatur impedit
                consequuntur et deserunt ad, maxime sunt minus quod sequi provident similique nisi ipsam amet, illum
                molestiae eaque. Blanditiis, autem eveniet, aperiam sit aspernatur culpa iure natus quae recusandae
                explicabo ut debitis repellat aliquam neque molestias vero rem. Et, voluptatibus modi dolorem optio
                incidunt quod! Molestiae unde dolorem voluptate impedit omnis, aut esse cum.
              </p>
            </div>
          </div>
        </section>

        {/* 여섯 번째 가로선이 보일 때만 렌더링 */}
        {showHorizontalLine && <div className={styles.animatedLine}></div>}
      </main>
    </div>
  )
}
