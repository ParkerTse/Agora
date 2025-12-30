(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/hooks/usePlacesAutocomplete.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePlacesAutocomplete",
    ()=>usePlacesAutocomplete
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const usePlacesAutocomplete = (query)=>{
    _s();
    const [predictions, setPredictions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePlacesAutocomplete.useEffect": ()=>{
            // 1. If query is empty or Google API isn't loaded, do nothing
            if (!query || query.length < 3 || !window.google || !window.google.maps || !window.google.maps.places) {
                setPredictions([]);
                return;
            }
            // 2. Create the service (only need to do this once technically, but this is fine)
            const autocompleteService = new window.google.maps.places.AutocompleteService();
            // 3. Ask for predictions
            autocompleteService.getPlacePredictions({
                input: query,
                componentRestrictions: {
                    country: 'us'
                },
                types: [
                    'geocode',
                    'establishment'
                ]
            }, {
                "usePlacesAutocomplete.useEffect": (results, status)=>{
                    if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
                        setPredictions(results);
                    } else {
                        setPredictions([]);
                    }
                }
            }["usePlacesAutocomplete.useEffect"]);
        }
    }["usePlacesAutocomplete.useEffect"], [
        query
    ]);
    return predictions;
};
_s(usePlacesAutocomplete, "zH5rPFTlWYOw2PPwe/kdtH2YoqI=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/searchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hooks$2f$usePlacesAutocomplete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/hooks/usePlacesAutocomplete.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function SearchBar({ onSearch }) {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 1. Get suggestions from our custom hook
    const predictions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hooks$2f$usePlacesAutocomplete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlacesAutocomplete"])(query);
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 2. Handle clicking outside to close the dropdown
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchBar.useEffect": ()=>{
            function handleClickOutside(event) {
                if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                    setIsOpen(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "SearchBar.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["SearchBar.useEffect"];
        }
    }["SearchBar.useEffect"], []);
    const handleSelect = (placeId, description)=>{
        setQuery(description);
        setIsOpen(false);
        onSearch(placeId, description); // Send the ID back to the map to get coordinates
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapperRef,
        className: "relative mb-6 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Search city, zip, or address...",
                        className: "w-full pl-4 pr-10 py-3 rounded-full bg-gray-100 border-transparent focus:bg-white focus:border-gray-300 focus:ring-0 transition-all text-sm outline-none shadow-sm",
                        value: query,
                        onChange: (e)=>{
                            setQuery(e.target.value);
                            setIsOpen(true);
                        },
                        onFocus: ()=>setIsOpen(true)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/searchBar.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400",
                        children: "🔍"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/searchBar.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/searchBar.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            isOpen && predictions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "absolute w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 max-h-60 overflow-y-auto",
                children: predictions.map((prediction)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        onClick: ()=>handleSelect(prediction.place_id, prediction.description),
                        className: "px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm text-gray-700 border-b last:border-b-0 border-gray-50 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-400 text-xs",
                                children: "📍"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/searchBar.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-gray-900",
                                        children: prediction.structured_formatting.main_text
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/searchBar.tsx",
                                        lineNumber: 68,
                                        columnNumber: 18
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: prediction.structured_formatting.secondary_text
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/searchBar.tsx",
                                        lineNumber: 71,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/searchBar.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this)
                        ]
                    }, prediction.place_id, true, {
                        fileName: "[project]/frontend/src/app/searchBar.tsx",
                        lineNumber: 60,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/searchBar.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/searchBar.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(SearchBar, "IEJVgv4vrSkadcarvPzLNu8Wo0A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hooks$2f$usePlacesAutocomplete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlacesAutocomplete"]
    ];
});
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$searchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/searchBar.tsx [app-client] (ecmascript)"); // <--- Make sure this path matches where you saved SearchBar.tsx
'use client';
;
;
function Sidebar({ isPinMode, onPinClick, radius, onRadiusChange, hasActivePin, onDeletePin, isConfirmMode, onConfirmClick, category, onCategoryChange, demandSummary, onUpvote, onSearch }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-[350px] h-full bg-white border-r shadow-lg flex flex-col p-6 z-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$searchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onSearch: onSearch
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/sidebar.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gray-800",
                        children: "Make a Wish"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/sidebar.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mt-1",
                        children: "Tell landlords what this area needs."
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/sidebar.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/sidebar.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto space-y-8 pr-2 scrollbar-thin scrollbar-thumb-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-semibold text-gray-700",
                                children: "What is missing here?"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/sidebar.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: category,
                                onChange: (e)=>onCategoryChange(e.target.value),
                                placeholder: "Type anything (e.g. Jazz Club)...",
                                className: "w-full p-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/sidebar.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 mt-2",
                                children: [
                                    '☕ Coffee Shop',
                                    '💪 Gym',
                                    '🥦 Grocery'
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>onCategoryChange(item),
                                        className: "text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors",
                                        children: item
                                    }, item, false, {
                                        fileName: "[project]/frontend/src/app/sidebar.tsx",
                                        lineNumber: 74,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/sidebar.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/sidebar.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-semibold text-gray-700",
                                        children: "How far would you travel?"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/sidebar.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold",
                                        children: [
                                            radius,
                                            " miles"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/sidebar.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/sidebar.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "0.5",
                                max: "5",
                                step: "0.5",
                                value: radius,
                                onChange: (e)=>onRadiusChange(Number(e.target.value)),
                                className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/sidebar.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-[10px] text-gray-400 px-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Walking (0.5mi)"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/sidebar.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Driving (5mi)"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/sidebar.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/sidebar.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/sidebar.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                        className: "border-gray-100"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/sidebar.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3",
                        children: [
                            !isConfirmMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onPinClick,
                                className: `w-full py-3 rounded-xl font-bold shadow-md transition-all flex items-center justify-center gap-2 ${isPinMode ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`,
                                disabled: isPinMode,
                                children: isPinMode ? 'Click on Map...' : '📍 Drop Pin'
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/sidebar.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onConfirmClick,
                                className: "w-full py-3 rounded-xl font-bold bg-green-600 text-white shadow-md hover:bg-green-700 transition-all flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "✅"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/sidebar.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    " Confirm Wish"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/sidebar.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this),
                            hasActivePin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onDeletePin,
                                className: "w-full py-2 rounded-xl font-semibold text-red-500 border border-red-200 hover:bg-red-50 transition-colors text-sm",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/sidebar.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/sidebar.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t pt-4",
                        children: demandSummary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col animate-in fade-in slide-in-from-bottom-2 duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-bold text-gray-700 uppercase tracking-wider",
                                            children: "Local Demand"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/sidebar.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] bg-gray-100 text-gray-500 px-2 py-1 rounded-full",
                                            children: "Live Data"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/sidebar.tsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/sidebar.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        Object.entries(demandSummary).sort(([, a], [, b])=>b - a).map(([cat, count])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center p-3 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 transition-colors group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-gray-800",
                                                                children: cat
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/sidebar.tsx",
                                                                lineNumber: 161,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-gray-500",
                                                                children: [
                                                                    count,
                                                                    " ",
                                                                    count === 1 ? 'person wants' : 'people want',
                                                                    " this"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/src/app/sidebar.tsx",
                                                                lineNumber: 162,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/sidebar.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onUpvote(cat),
                                                        className: "bg-white text-blue-600 hover:bg-blue-600 hover:text-white border border-blue-200 p-2 rounded-full shadow-sm transition-all active:scale-95 flex items-center justify-center",
                                                        title: "I want this too!",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-bold",
                                                            children: "👍 +1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/app/sidebar.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/sidebar.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, cat, true, {
                                                fileName: "[project]/frontend/src/app/sidebar.tsx",
                                                lineNumber: 159,
                                                columnNumber: 21
                                            }, this)),
                                        Object.keys(demandSummary).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-400 text-center mt-4",
                                            children: "No wishes found here yet."
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/sidebar.tsx",
                                            lineNumber: 177,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/sidebar.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/sidebar.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center text-center text-gray-400 border-2 border-dashed border-gray-100 rounded-xl px-4 py-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs",
                                children: isConfirmMode ? "Drag pin to exact spot." : "Click a building to upvote wishes."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/sidebar.tsx",
                                lineNumber: 183,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/sidebar.tsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/sidebar.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/sidebar.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/sidebar.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
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
    // Ref for "Landlord" Selection Marker
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
    // 2. Initialize Map & Setup "Idle" Listener
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMapsComponent.useEffect": ()=>{
            if (!isLoaded || !mapRef.current || mapInstanceRef.current) return;
            const map = new google.maps.Map(mapRef.current, {
                zoom: 13,
                center: {
                    lat: 40.5795,
                    lng: -74.1502
                },
                mapId: 'DEMO_MAP_ID',
                disableDefaultUI: true,
                zoomControl: true
            });
            mapInstanceRef.current = map;
            // --- THIS IS THE KEY PART ---
            // When the user stops dragging/zooming, we calculate the visible box
            map.addListener('idle', {
                "GoogleMapsComponent.useEffect": ()=>{
                    if (onBoundsChange) {
                        const bounds = map.getBounds();
                        if (bounds) {
                            const ne = bounds.getNorthEast(); // Top Right
                            const sw = bounds.getSouthWest(); // Bottom Left
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
    // 4. Render Properties (Clustering)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMapsComponent.useEffect": ()=>{
            if (!mapInstanceRef.current || !window.google) return;
            // Clear old clusters
            if (clustererRef.current) {
                clustererRef.current.clearMarkers();
                clustererRef.current = null;
            }
            const loadMarkers = {
                "GoogleMapsComponent.useEffect.loadMarkers": async ()=>{
                    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
                    const newMarkers = [];
                    // Safety check to handle empty data gracefully
                    (properties || []).forEach({
                        "GoogleMapsComponent.useEffect.loadMarkers": (prop)=>{
                            const tag = document.createElement('div');
                            // Custom styling for the pins
                            tag.className = 'bg-blue-600 text-white px-2 py-1 rounded shadow-md text-xs font-bold border border-white transform hover:scale-110 transition-transform cursor-pointer';
                            const size = prop.squareFeet ? prop.squareFeet.toLocaleString() : '?';
                            tag.innerText = `${size} sf`;
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
    // 9. GENERIC CLICK LISTENER (FIXED)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMapsComponent.useEffect": ()=>{
            if (!mapInstanceRef.current || isPinMode) return;
            const map = mapInstanceRef.current;
            const listener = map.addListener('click', {
                "GoogleMapsComponent.useEffect.listener": (e)=>{
                    if (onMapClick && e.latLng) {
                        onMapClick(e.latLng.lat(), e.latLng.lng());
                        if (selectionMarkerRef.current) {
                            selectionMarkerRef.current.setMap(null);
                        }
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
            lineNumber: 277,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/map.tsx",
        lineNumber: 276,
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
"[project]/frontend/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/map.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$topbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/topbar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Home() {
    _s();
    // UI State
    const [isPinMode, setIsPinMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isConfirmMode, setIsConfirmMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasActivePin, setHasActivePin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Data Inputs
    const [radius, setRadius] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Coffee Shop");
    // --- LOCATION STATE ---
    // 1. For the PIN (Making a wish) - Object {lat, lng}
    const [pinLocation, setPinLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // 2. For the SEARCH BAR (Teleporting) - String "Miami"
    const [searchString, setSearchString] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // 3. For the SIDEBAR (Viewing demand)
    const [viewingLocation, setViewingLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Data State
    const [properties, setProperties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [demandSummary, setDemandSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- Fetch based on Viewport (Optimized with useCallback) ---
    const fetchProperties = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[fetchProperties]": (bounds)=>{
            let url = 'http://localhost:8080/api/properties';
            if (bounds) {
                const query = new URLSearchParams({
                    minLat: bounds.minLat.toString(),
                    maxLat: bounds.maxLat.toString(),
                    minLng: bounds.minLng.toString(),
                    maxLng: bounds.maxLng.toString()
                });
                url += `?${query.toString()}`;
            }
            // console.log("Fetching from:", url); // Uncomment for debugging
            fetch(url).then({
                "Home.useCallback[fetchProperties]": (res)=>res.json()
            }["Home.useCallback[fetchProperties]"]).then({
                "Home.useCallback[fetchProperties]": (data)=>setProperties(data)
            }["Home.useCallback[fetchProperties]"]).catch({
                "Home.useCallback[fetchProperties]": (err)=>console.error("Error fetching properties:", err)
            }["Home.useCallback[fetchProperties]"]);
        }
    }["Home.useCallback[fetchProperties]"], []); // Empty dependency array = function never changes identity (Fast!)
    // --- HELPER: Fetch Demand for ANY Location ---
    const fetchDemand = (lat, lng)=>{
        fetch(`http://localhost:8080/demand-summary?lat=${lat}&lon=${lng}`).then((res)=>res.json()).then((data)=>setDemandSummary(data)).catch((err)=>console.error("Error fetching demand:", err));
    };
    // --- HANDLER 1: CLICK A PROPERTY (Building) ---
    const handlePropertyClick = (lat, lng)=>{
        setViewingLocation({
            lat,
            lng
        });
        setHasActivePin(false);
        setIsConfirmMode(false);
        setIsPinMode(false);
        fetchDemand(lat, lng);
    };
    // --- HANDLER 2: CLICK MAP (Landlord Mode - Empty Space) ---
    const handleMapClick = (lat, lng)=>{
        // Only allow clicking empty space if we aren't trying to drop a pin
        if (isPinMode || isConfirmMode) return;
        setViewingLocation({
            lat,
            lng
        });
        setHasActivePin(false);
        fetchDemand(lat, lng);
    };
    // --- HANDLER 3: UPVOTE ---
    const handleUpvote = (categoryToUpvote)=>{
        if (!viewingLocation) return;
        fetch('http://localhost:8080/wish', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                category: categoryToUpvote,
                latitude: viewingLocation.lat,
                longitude: viewingLocation.lng,
                radiusMeters: 400
            })
        }).then((res)=>res.json()).then(()=>{
            // Refresh demand to see the new vote immediately
            handlePropertyClick(viewingLocation.lat, viewingLocation.lng);
        }).catch((err)=>alert("Error upvoting: " + err));
    };
    // --- HANDLER 4: CONFIRM NEW WISH ---
    const handleConfirm = ()=>{
        if (!pinLocation) {
            alert("Error: No location selected.");
            return;
        }
        const radiusMeters = radius * 1609.34;
        fetch('http://localhost:8080/wish', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                category: category,
                latitude: pinLocation.lat,
                longitude: pinLocation.lng,
                radiusMeters: radiusMeters
            })
        }).then((res)=>{
            if (!res.ok) throw new Error("Backend failed");
            return res.json();
        }).then(()=>{
            setHasActivePin(false);
            setIsConfirmMode(false);
            setPinLocation(null);
            setDemandSummary(null);
            alert("Wish saved successfully!");
        }).catch((err)=>{
            console.error("Error saving wish:", err);
            alert("Failed to save wish.");
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-screen w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$topbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/frontend/src/app/page.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row flex-1 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isPinMode: isPinMode,
                        isConfirmMode: isConfirmMode,
                        onPinClick: ()=>setIsPinMode(true),
                        onConfirmClick: handleConfirm,
                        radius: radius,
                        onRadiusChange: setRadius,
                        category: category,
                        onCategoryChange: setCategory,
                        hasActivePin: hasActivePin,
                        onDeletePin: ()=>{
                            setHasActivePin(false);
                            setIsConfirmMode(false);
                            setPinLocation(null);
                            setDemandSummary(null);
                            setViewingLocation(null);
                        },
                        demandSummary: demandSummary,
                        onUpvote: handleUpvote,
                        onSearch: (query)=>setSearchString(query)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 h-full relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            // 1. Viewport Filtering
                            properties: properties,
                            onBoundsChange: fetchProperties,
                            // 2. Click Handling
                            onPropertyClick: handlePropertyClick,
                            onMapClick: handleMapClick,
                            // 3. Pin & UI State
                            isPinMode: isPinMode,
                            setPinMode: setIsPinMode,
                            isConfirmMode: isConfirmMode,
                            setIsConfirmMode: setIsConfirmMode,
                            searchRadius: radius,
                            hasActivePin: hasActivePin,
                            setHasActivePin: setHasActivePin,
                            onPinPositionChange: (lat, lng)=>setPinLocation({
                                    lat,
                                    lng
                                }),
                            searchLocation: searchString
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/page.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/page.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/page.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
_s(Home, "4iIoCscDO+ZUCK+F0yY1gbkN3B4=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_ad7eb3a7._.js.map