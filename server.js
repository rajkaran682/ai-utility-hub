import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
const __dirname=path.dirname(fileURLToPath(import.meta.url));
const app=express(); const PORT=process.env.PORT||10000;
app.use(express.json()); app.use(express.static(path.join(__dirname,'public')));
app.get('/api/health',(_,res)=>res.json({ok:true}));
app.get('*splat',(_,res)=>res.sendFile(path.join(__dirname,'public','index.html')));
app.listen(PORT,'0.0.0.0',()=>console.log('Running on '+PORT));
