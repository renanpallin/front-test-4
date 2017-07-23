import React from 'react';

export default props => (
  <div className="paginator">
    <ul>
      <li onClick={e => props.previousPage(e)}></li>
      {
        Array(props.numberOfPages)
          .fill()
          .map((undef, index) => (
              <li
                key={index + 1}
                className={index === (props.page - 1) ? "active" : ""}

                onClick={e => props.goToPage(index +1 )}>
                <span>
                  {index + 1}
                </span>
              </li>
            )
          )
      }
      <li onClick={e => props.nextPage(e)}></li>
    </ul>
  </div>
)
