import React from 'react';

const KanbanBoard = () => {
  return (
    <div className="main">
      <div className="header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb" style={{ backgroundColor: 'white' }}>
            <li className="breadcrumb-item">Project</li>
            <li className="breadcrumb-item">CyberLearn</li>
            <li className="breadcrumb-item active" aria-current="page">
              Cyber Board
            </li>
          </ol>
        </nav>
      </div>
      <h3>Cyber Board</h3>
      <div className="info" style={{ display: 'flex' }}>
        <div className="search-block">
          <input className="search" />
          <i className="fa fa-search" />
        </div>
        <div className="avatar-group" style={{ display: 'flex' }}>
          <div className="avatar">
            <img src="./img/download (1).jfif" alt="" />
          </div>
          <div className="avatar">
            <img src="./img/download (2).jfif" alt="" />
          </div>
          <div className="avatar">
            <img src="./img/download (3).jfif" alt="" />
          </div>
        </div>
        <div style={{ marginLeft: 20 }} className="text">
          Only My Issues
        </div>
        <div style={{ marginLeft: 20 }} className="text">
          Recently Updated
        </div>
      </div>
      <div className="content" style={{ display: 'flex' }}>
        <div className="card" style={{ width: '25%', height: '25rem' }}>
          <div className="card-header">BACKLOG 3</div>
          <ul className="list-group list-group-flush">
            <li
              className="list-group-item"
              data-toggle="modal"
              data-target="#infoModal"
              style={{ cursor: 'pointer' }}
            >
              <p>
                Each issue has a single reporter but can have multiple assignees
              </p>
              <div className="block" style={{ display: 'flex' }}>
                <div className="block-left">
                  <i
                    className="fa fa-bookmark"
                    style={{ marginRight: '5px' }}
                  />
                  <i className="fa fa-arrow-up" />
                </div>
                <div className="block-right">
                  <div className="avatar-group" style={{ display: 'flex' }}>
                    <div className="avatar">
                      <img src="./img/download (1).jfif" alt="" />
                    </div>
                    <div className="avatar">
                      <img src="./img/download (2).jfif" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <p>
                Each issue has a single reporter but can have multiple assignees
              </p>
              <div className="block" style={{ display: 'flex' }}>
                <div className="block-left">
                  <i
                    className="fa fa-check-square"
                    style={{ marginRight: '5px' }}
                  />
                  <i className="fa fa-arrow-up" />
                </div>
                <div className="block-right">
                  <div className="avatar-group" style={{ display: 'flex' }}>
                    <div className="avatar">
                      <img src="./img/download (1).jfif" alt="" />
                    </div>
                    <div className="avatar">
                      <img src="./img/download (2).jfif" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
        <div className="card" style={{ width: '25%', height: '25rem' }}>
          <div className="card-header">SELECTED FOR DEVELOPMENT 2</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
          </ul>
        </div>
        <div className="card" style={{ width: '25%', height: '25rem' }}>
          <div className="card-header">IN PROGRESS 2</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
          </ul>
        </div>
        <div className="card" style={{ width: '25%', height: '25rem' }}>
          <div className="card-header">DONE 3</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
