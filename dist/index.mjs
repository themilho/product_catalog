import r from"express";import{createServer as e}from"http";var s=r(),t=e(s),o=process.env.PORT||3e3;t.listen(o,()=>{console.log(`Server is running on http://localhost:${o}`)});
