---
to: src/pages/<%= Name %>/<%= Name %>.jsx
---
import React from 'react';
import "./<%= Name %>.scss"

const <%= Name %> = () => {
  return (
    <div className="<%= h.changeCase.kebab(name) %>">

    </div>
   );
}

export default <%= Name %>;