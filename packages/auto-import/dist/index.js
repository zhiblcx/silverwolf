'use strict';

var o=["Affix","Alert","Anchor","App","AutoComplete","Avatar","BackTop","Badge","Breadcrumb","Button","Calendar","Card","Carousel","Cascader","Checkbox","Col","Collapse","ColorPicker","ConfigProvider","DatePicker","Descriptions","Divider","Drawer","Dropdown","Empty","Flex","FloatButton","Form","Grid","Image","Input","InputNumber","Layout","List","Mentions","Menu","Modal","Pagination","Popconfirm","Popover","Progress","QRCode","Radio","Rate","Result","Row","Segmented","Select","Skeleton","Slider","Space","Spin","Statistic","Steps","Switch","Table","Tabs","Tag","TimePicker","Timeline","Tooltip","Tour","Transfer","Tree","TreeSelect","Typography","Upload","Watermark"];var u=()=>({type:"component",resolve:e=>{if(o.includes(e))return {name:e,from:"antd"}}});var n=["QueryClient","QueryCache","MutationCache","focusManager","onlineManager","useQuery","useInfiniteQuery","useMutation","useIsFetching","useIsMutating","useMutationState","useSuspenseQuery","useQueryClient","QueryClientProvider"];var d=e=>({type:"component",resolve:t=>{if(n.includes(t)){let r="@tanstack/react-query";switch(e){case"vue":r="@tanstack/vue-query";break}return {name:t,from:r}}}});

exports.antdResolver = u;
exports.tanStackResolver = d;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map