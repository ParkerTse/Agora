"use client";
import { useEffect } from 'react';

export default function Test() {
    useEffect(() => {
        console.log('Testing module loaded');
        return () => {
            console.log('Testing module unloaded');
        };
    }, []);

    return (<div>
        <h2>Testing Component</h2>
        <p>This is a test component to verify module loading and unloading.</p>
    </div>
  );
}