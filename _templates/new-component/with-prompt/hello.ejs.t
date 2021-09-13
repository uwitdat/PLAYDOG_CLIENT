---
to: src/components/<%= Name %>/<%= Name %>.jsx
---
import React from 'react';
const <%= Name %> = () => {
  return (
    <div className="<%= h.changeCase.kebab(name) %>">

    </div>
   );
}

export default <%= Name %>;