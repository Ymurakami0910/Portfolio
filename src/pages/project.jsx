import React, { useState } from 'react';
import ProjectCard2 from '../components/ProjectCard2';

function Projects() {
  const [filter, setFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false); // フィルターの表示状態を管理

  // フィルターの更新
  const handleFilterClick = (chip) => {
    setFilter(chip === filter ? '' : chip); // クリックしたら適用、もう一回押したら解除
  };

  // フィルターの開閉
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // 利用可能なスキルタグ
  const allChips = ["Indesign", "Illustrator", "PhotoShop", "After Effect", "Web-Development", "Figma"];

  return (
    <div className="Paper_v2 bg_pattern">
      <div className="container">
        <div className="ProjectPage-content">
          <h1>All Projects</h1>

          {/* Skill Searchボタン */}
          <button className="skillSearchBtn" onClick={toggleFilters}>
            Skill Search
          </button>

          {/* フィルターリスト (開閉する) */}
          {showFilters && (
            <div className="filters">
              <button
                onClick={() => handleFilterClick('')}
                className={filter === '' ? 'active' : ''}
              >
                All
              </button>
              {allChips.map((chip, index) => (
                <button
                  key={index}
                  className={filter === chip ? 'active' : ''}
                  onClick={() => handleFilterClick(chip)}
                >
                  {chip}
                </button>
              ))}
            </div>
          )}

          {/* フィルターをProjectCard2に渡す */}
          <ProjectCard2 filter={filter} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
