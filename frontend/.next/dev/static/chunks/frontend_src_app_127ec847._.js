(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/app/topbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Topbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Topbar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Topbar.useEffect": ()=>{
            console.log('Topbar module loaded');
            return ({
                "Topbar.useEffect": ()=>{
                    console.log('Topbar module unloaded');
                }
            })["Topbar.useEffect"];
        }
    }["Topbar.useEffect"], []);
    const isActive = (href)=>{
        if (!pathname) return false;
        if (href === '/') return pathname === '/';
        return pathname === href || pathname.startsWith(href + '/');
    };
    const linkStyle = (href)=>({
            margin: '0 10px',
            padding: '6px 8px',
            borderRadius: '4px',
            backgroundColor: isActive(href) ? '#cfe8ff' : 'transparent',
            color: isActive(href) ? '#003366' : 'inherit',
            textDecoration: 'none'
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px',
            backgroundColor: '#f0f0f0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        style: linkStyle('/'),
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/topbar.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/retail-space",
                        style: linkStyle('/retail-space'),
                        children: "Retail Space"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/topbar.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/contact",
                        style: linkStyle('/contact'),
                        children: "Contact"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/topbar.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/topbar.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/login",
                    style: linkStyle('/login'),
                    children: "Login"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/topbar.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/topbar.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/topbar.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(Topbar, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Topbar;
var _c;
__turbopack_context__.k.register(_c, "Topbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/map.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GoogleMapsComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$googlemaps$2f$markerclusterer$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@googlemaps/markerclusterer/dist/index.esm.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const GOOGLE_MAPS_API_KEY = ("TURBOPACK compile-time value", "AIzaSyCmyv_tZANRj5ME2hxpW2Rfwn3Munnl_nU") || '';
function GoogleMapsComponent({ isPinMode, setPinMode, searchRadius, hasActivePin, setHasActivePin, isConfirmMode, setIsConfirmMode, onPinPositionChange, properties, onPropertyClick, onMapClick, onBoundsChange, searchLocation }) {
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const clustererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Refs for "Make a Wish" Pin
    const currentMarkerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentCircleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // --- Ref for "Landlord" Selection Marker (The Black Dot) ---
    const selectionMarkerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 1. Load Script
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMapsComponent.useEffect": ()=>{
            if (window.google?.maps) {
                setIsLoaded(true);
                return;
            }
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=weekly&libraries=marker,places,geometry`;
            script.async = true;
            script.onload = ({
                "GoogleMapsComponent.useEffect": ()=>setIsLoaded(true)
            })["GoogleMapsComponent.useEffect"];
            document.head.appendChild(script);
        }
    }["GoogleMapsComponent.useEffect"], []);
    // 2. Initialize Map
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMapsComponent.useEffect": ()=>{
            if (!isLoaded || !mapRef.current || mapInstanceRef.current) return;
            const map = new google.maps.Map(mapRef.current, {
                zoom: 13,
                center: {
                    lat: 40.7484,
                    lng: -73.9857
                },
                mapId: 'DEMO_MAP_ID',
                disableDefaultUI: true,
                zoomControl: true
            });
            mapInstanceRef.current = map;
            map.addListener('idle', {
                "GoogleMapsComponent.useEffect": ()=>{
                    if (onBoundsChange) {
                        const bounds = map.getBounds();
                        if (bounds) {
                            const ne = bounds.getNorthEast();
                            const sw = bounds.getSouthWest();
                            onBoundsChange({
                                maxLat: ne.lat(),
                                maxLng: ne.lng(),
                                minLat: sw.lat(),
                                minLng: sw.lng()
                            });
                        }
                    }
                }
            }["GoogleMapsComponent.useEffect"]);
        }
    }["GoogleMapsComponent.useEffect"], [
        isLoaded,
        onBoundsChange
    ]);
    // 3. Handle Search Teleporting
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMapsComponent.useEffect": ()=>{
            if (!searchLocation || !mapInstanceRef.current || !window.google) return;
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({
                address: searchLocation
            }, {
                "GoogleMapsComponent.useEffect": (results, status)=>{
                    if (status === 'OK' && results && results[0]) {
                        const location = results[0].geometry.location;
                        mapInstanceRef.current?.panTo(location);
                        mapInstanceRef.current?.setZoom(14);
                    }
                }
            }["GoogleMapsComponent.useEffect"]);
        }
    }["GoogleMapsComponent.useEffect"], [
        searchLocation,
        isLoaded
    ]);
    // 4. Render Properties (Clustering) - SAFE VERSION
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMapsComponent.useEffect": ()=>{
            if (!mapInstanceRef.current || !window.google) return;
            if (clustererRef.current) {
                clustererRef.current.clearMarkers();
                clustererRef.current = null;
            }
            const loadMarkers = {
                "GoogleMapsComponent.useEffect.loadMarkers": async ()=>{
                    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
                    const newMarkers = [];
                    // --- CRITICAL FIX: "|| []" PREVENTS THE CRASH ---
                    (properties || []).forEach({
                        "GoogleMapsComponent.useEffect.loadMarkers": (prop)=>{
                            const tag = document.createElement('div');
                            tag.className = 'bg-green-600 text-white px-2 py-1 rounded shadow-md text-xs font-bold border border-white transform hover:scale-110 transition-transform cursor-pointer';
                            const size = prop.squareFeet ? prop.squareFeet.toLocaleString() : '?';
                            tag.innerText = `${size} sf`;
                            tag.className = 'bg-blue-600 text-white px-2 py-1 rounded shadow-md text-xs font-bold border border-white transform hover:scale-110 transition-transform cursor-pointer';
                            const marker = new AdvancedMarkerElement({
                                position: {
                                    lat: prop.latitude,
                                    lng: prop.longitude
                                },
                                content: tag,
                                title: prop.address
                            });
                            marker.addListener("click", {
                                "GoogleMapsComponent.useEffect.loadMarkers": ()=>{
                                    if (onPropertyClick) onPropertyClick(prop.latitude, prop.longitude);
                                    mapInstanceRef.current?.panTo({
                                        lat: prop.latitude,
                                        lng: prop.longitude
                                    });
                                }
                            }["GoogleMapsComponent.useEffect.loadMarkers"]);
                            newMarkers.push(marker);
                        }
                    }["GoogleMapsComponent.useEffect.loadMarkers"]);
                    clustererRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$googlemaps$2f$markerclusterer$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerClusterer"]({
                        map: mapInstanceRef.current,
                        markers: newMarkers,
                        algorithm: new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$googlemaps$2f$markerclusterer$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SuperClusterAlgorithm"]({
                            maxZoom: 15,
                            radius: 50
                        })
                    });
                }
            }["GoogleMapsComponent.useEffect.loadMarkers"];
            loadMarkers();
        }
    }["GoogleMapsComponent.useEffect"], [
        properties,
        isLoaded,
        onPropertyClick
    ]);
    // 5. Update Circle Radius
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMapsComponent.useEffect": ()=>{
            if (currentCircleRef.current) {
                const meters = searchRadius * 1609.34;
                currentCircleRef.current.setRadius(meters);
            }
        }
    }["GoogleMapsComponent.useEffect"], [
        searchRadius
    ]);
    // 6. Clear Pin if Cancelled
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMapsComponent.useEffect": ()=>{
            if (!hasActivePin) {
                if (currentMarkerRef.current) {
                    currentMarkerRef.current.map = null;
                    currentMarkerRef.current = null;
                }
                if (currentCircleRef.current) {
                    currentCircleRef.current.setMap(null);
                    currentCircleRef.current = null;
                }
            }
        }
    }["GoogleMapsComponent.useEffect"], [
        hasActivePin
    ]);
    // 7. Toggle Draggable
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMapsComponent.useEffect": ()=>{
            if (currentMarkerRef.current) {
                currentMarkerRef.current.gmpDraggable = isConfirmMode;
            }
        }
    }["GoogleMapsComponent.useEffect"], [
        isConfirmMode
    ]);
    // 8. PIN MODE LOGIC
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMapsComponent.useEffect": ()=>{
            if (!mapInstanceRef.current || !isPinMode) return;
            const map = mapInstanceRef.current;
            map.setOptions({
                draggableCursor: 'crosshair'
            });
            const clickListener = map.addListener('click', {
                "GoogleMapsComponent.useEffect.clickListener": async (e)=>{
                    if (!e.latLng) return;
                    onPinPositionChange(e.latLng.lat(), e.latLng.lng());
                    if (currentMarkerRef.current) currentMarkerRef.current.map = null;
                    if (currentCircleRef.current) currentCircleRef.current.setMap(null);
                    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
                    const pinElement = document.createElement('div');
                    pinElement.className = 'bg-white text-blue-600 px-3 py-1 rounded-full border-2 border-blue-600 font-bold shadow-lg text-sm cursor-grab';
                    pinElement.innerText = 'New Wish';
                    const newMarker = new AdvancedMarkerElement({
                        map,
                        position: e.latLng,
                        content: pinElement,
                        gmpDraggable: true
                    });
                    const newCircle = new google.maps.Circle({
                        map,
                        center: e.latLng,
                        radius: searchRadius * 1609.34,
                        fillColor: "#1a73e8",
                        fillOpacity: 0.2,
                        strokeColor: "#1a73e8",
                        strokeWeight: 1,
                        clickable: false
                    });
                    newMarker.addListener('drag', {
                        "GoogleMapsComponent.useEffect.clickListener": ()=>{
                            const newPos = newMarker.position;
                            if (newPos) {
                                newCircle.setCenter(newPos);
                                if (typeof newPos.lat === 'function') onPinPositionChange(newPos.lat(), newPos.lng());
                            }
                        }
                    }["GoogleMapsComponent.useEffect.clickListener"]);
                    newMarker.addListener('dragend', {
                        "GoogleMapsComponent.useEffect.clickListener": ()=>{
                            const newPos = newMarker.position;
                            if (newPos && typeof newPos.lat === 'function') onPinPositionChange(newPos.lat(), newPos.lng());
                        }
                    }["GoogleMapsComponent.useEffect.clickListener"]);
                    currentMarkerRef.current = newMarker;
                    currentCircleRef.current = newCircle;
                    setHasActivePin(true);
                    setIsConfirmMode(true);
                    setPinMode(false);
                    map.setOptions({
                        draggableCursor: null
                    });
                }
            }["GoogleMapsComponent.useEffect.clickListener"]);
            return ({
                "GoogleMapsComponent.useEffect": ()=>google.maps.event.removeListener(clickListener)
            })["GoogleMapsComponent.useEffect"];
        }
    }["GoogleMapsComponent.useEffect"], [
        isPinMode,
        searchRadius,
        setPinMode,
        setHasActivePin,
        setIsConfirmMode,
        onPinPositionChange
    ]);
    // 9. GENERIC CLICK LISTENER (FIXED FOR BLACK DOT REMOVAL)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMapsComponent.useEffect": ()=>{
            if (!mapInstanceRef.current || isPinMode) return;
            const map = mapInstanceRef.current;
            const listener = map.addListener('click', {
                "GoogleMapsComponent.useEffect.listener": (e)=>{
                    if (onMapClick && e.latLng) {
                        onMapClick(e.latLng.lat(), e.latLng.lng());
                        // --- 1. DELETE OLD MARKER (This ensures the old dot is removed) ---
                        if (selectionMarkerRef.current) {
                            selectionMarkerRef.current.setMap(null);
                        }
                        // --- 2. CREATE NEW MARKER ---
                        selectionMarkerRef.current = new google.maps.Marker({
                            position: e.latLng,
                            map: map,
                            icon: {
                                path: google.maps.SymbolPath.CIRCLE,
                                scale: 7,
                                fillColor: "black",
                                fillOpacity: 1,
                                strokeWeight: 2,
                                strokeColor: "white"
                            }
                        });
                    }
                }
            }["GoogleMapsComponent.useEffect.listener"]);
            return ({
                "GoogleMapsComponent.useEffect": ()=>google.maps.event.removeListener(listener)
            })["GoogleMapsComponent.useEffect"];
        }
    }["GoogleMapsComponent.useEffect"], [
        isPinMode,
        onMapClick,
        isLoaded
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: mapRef,
            className: "w-full h-full"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/map.tsx",
            lineNumber: 274,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/map.tsx",
        lineNumber: 273,
        columnNumber: 5
    }, this);
}
_s(GoogleMapsComponent, "SxESMvkJXto7p41/eoDBFmHAJ9M=");
_c = GoogleMapsComponent;
var _c;
__turbopack_context__.k.register(_c, "GoogleMapsComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/retail-space/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandlordPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$topbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/topbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/map.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function LandlordPage() {
    _s();
    // 1. Handle Map Clicks
    const handleMapClick = (lat, lng)=>{
        setFormData((prev)=>({
                ...prev,
                latitude: lat.toString(),
                longitude: lng.toString()
            }));
    };
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        address: '',
        description: '',
        price: '',
        squareFeet: '',
        latitude: '40.7484',
        longitude: '-73.9857'
    });
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setStatus('Saving...');
        try {
            const res = await fetch('http://localhost:8080/api/properties/property', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    address: formData.address,
                    description: formData.description,
                    price: parseFloat(formData.price),
                    squareFeet: formData.squareFeet ? parseInt(formData.squareFeet) : 0,
                    latitude: parseFloat(formData.latitude),
                    longitude: parseFloat(formData.longitude)
                })
            });
            if (res.ok) {
                setStatus('Success! Property listed.');
                setFormData({
                    address: '',
                    description: '',
                    price: '',
                    squareFeet: '',
                    latitude: '40.7484',
                    longitude: '-73.9857'
                });
            } else {
                setStatus('Error saving property.');
            }
        } catch (err) {
            console.error(err);
            setStatus('Network error.');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$topbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-[calc(100vh-64px)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1/3 p-8 bg-white overflow-y-auto border-r border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-gray-800",
                                        children: "Post a Space"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "text-sm text-blue-600 hover:underline",
                                        children: "← Back to Map"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Building Name / Address"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                required: true,
                                                type: "text",
                                                placeholder: "e.g. 123 Main St",
                                                className: "w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none",
                                                value: formData.address,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        address: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Description"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                placeholder: "e.g. Corner unit, great visibility...",
                                                className: "w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none",
                                                rows: 3,
                                                value: formData.description,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        description: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Monthly Rent ($)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        type: "number",
                                                        placeholder: "5000",
                                                        className: "w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none",
                                                        value: formData.price,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                price: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Size (Sq Ft)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        type: "number",
                                                        placeholder: "1200",
                                                        className: "w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none",
                                                        value: formData.squareFeet,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                squareFeet: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-medium text-gray-500 mb-1",
                                                        children: "Latitude"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        className: "w-full p-2 border rounded text-sm bg-gray-50",
                                                        value: formData.latitude,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                latitude: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-medium text-gray-500 mb-1",
                                                        children: "Longitude"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        className: "w-full p-2 border rounded text-sm bg-gray-50",
                                                        value: formData.longitude,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                longitude: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-blue-50 text-blue-700 text-sm rounded-lg",
                                        children: "📍 Click anywhere on the map to set location automatically."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "w-full bg-black text-white font-bold py-3 rounded-xl hover:bg-gray-800 transition-all mt-4",
                                        children: "Post Listing"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-center text-sm font-semibold mt-2 ${status.includes('Success') ? 'text-green-600' : 'text-red-500'}`,
                                        children: status
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-2/3 relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            isPinMode: false,
                            setPinMode: ()=>{},
                            searchRadius: 1,
                            hasActivePin: false,
                            setHasActivePin: ()=>{},
                            isConfirmMode: false,
                            setIsConfirmMode: ()=>{},
                            onPinPositionChange: ()=>{},
                            properties: [],
                            onMapClick: handleMapClick
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/retail-space/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(LandlordPage, "MN1lZEvv+1iqhd195MTim+EejGY=");
_c = LandlordPage;
var _c;
__turbopack_context__.k.register(_c, "LandlordPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_app_127ec847._.js.map