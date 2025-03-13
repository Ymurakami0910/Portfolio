import React, { useState } from 'react'; 
import ProjectCard2 from '../components/ProjectCard2';

function Projects() {
  const [filter, setFilter] = useState(''); // フィルター状態を管理

  // チップをクリックしたときにフィルターを更新
  const handleFilterClick = (chip) => {
    setFilter(chip === filter ? '' : chip); // 同じフィルターがクリックされた場合はリセット
  };

  // chipsデータを動的に生成してフィルターボタンに利用
  const allChips = ["Indesign", "Illustrator", "PhotoShop","After Effect", "Web-Development", "Figma"];

  return (
    <div className="Paper_v2 bg_pattern">
      <div className="container">
        <div className="ProjectPage-content">
          <h1>All Projects</h1>

          {/* フィルター用のチップを表示 */}
          <div className="filters">
            <button onClick={() => handleFilterClick('')}>All</button>
            {allChips.map((chip, index) => (
              <button key={index} onClick={() => handleFilterClick(chip)}>
                {chip}
              </button>
            ))}
          </div>

          {/* ProjectCard2コンポーネントにフィルターを渡す */}
          <ProjectCard2 filter={filter} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
