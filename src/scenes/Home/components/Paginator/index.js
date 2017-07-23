import React from 'react';

export default props => (
  <div className="paginator">
    <ul>
      <li
        className={`btn hoverable ${props.page === 1 ? "disabled" : ""}`}
        onClick={e => props.previousPage(e)} />
      {
        Array(props.numberOfPages)
          .fill()
          .map((undef, index) => (
              <li
                key={index + 1}
                className={`btn hoverable ${index === (props.page - 1) ? "active" : ""}`}

                onClick={e => props.goToPage(index +1 )}>
                <span>
                  {index + 1}
                </span>
              </li>
            )
          )
      }
      <li
        className={`btn hoverable ${props.page === props.numberOfPages ? "disabled" : ""}`}
        onClick={e => props.nextPage(e)} />
    </ul>
  </div>
)
