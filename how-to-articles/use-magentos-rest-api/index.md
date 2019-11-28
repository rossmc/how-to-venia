# Use Magento's REST API
If you want to call Magento REST API you can use perengine hook for it. Example of usage: 

```jsx
import React, { useEffect } from 'react';
import { useRestApi } from '@magento/peregrine';

const Menu = () => {
    const [restResponse, restApi] = useRestApi('/rest/V1/nodes');
    const { data, error, loading } = restResponse;
    const { sendRequest } = restApi;

    useEffect(() => {
        const fetch = async () => {
            await sendRequest({
                options: {
                    method: 'POST',
                    body: JSON.stringify({
                        menuId: 8
                    })
                }
            });
        };
        fetch();
    }, [sendRequest]);
    
    if (error) return <h1>Error!</h1>;
    if (loading || !data) return <h1>Loading...</h1>;

    return <div>{JSON.stringify(data)}</div>;
};

export default Menu;
```


---
- [> see other topics](../../README.md#Topics)
