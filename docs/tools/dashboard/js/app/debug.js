define(["app/util"],(function(t){return new class{constructor(){this._isDebugMode=t.getUrlParams().debug,this._showPointstoNodeIds=!1,this._showExplorationNodeIds=!1,this._showCodeLocationForAllTypes=!0,this._showCodeLocationForTypes=["callsite"],this.pointstoDebugInfo=null,this.methodDiscrepancies=null,this._showExploreMethodButton=!0,this.pointstoExampleMethodName="ch.experiment.printing.FormattedPrinter.printToOutput(String)",this.pointstoExampleDataSourceIndex=0,this._showFullyExpandButton=!0,this._showEdgeLabels=!0,this._edgeLabelsReasonOnly=!1}isDebugMode(){return this._isDebugMode}showPointstoNodeIds(){return!!this._isDebugMode&&this._showPointstoNodeIds}showExplorationNodeIds(){return!!this._isDebugMode&&this._showExplorationNodeIds}showExploreMethodButton(){return!!this._isDebugMode&&this._showExploreMethodButton}showCodeLocationForAllTypes(){return!this._isDebugMode||this._showCodeLocationForAllTypes}showCodeLocationForTypes(){return this._isDebugMode?this._showCodeLocationForTypes:[]}showFullyExpandButton(){return!!this._isDebugMode&&this._showFullyExpandButton}showEdgeLabels(){return!this._isDebugMode||this._showEdgeLabels}edgeLabelsReasonOnly(){return!!this._isDebugMode&&this._edgeLabelsReasonOnly}generateDebugInfoForPointstoEvent(t){if(!this.isDebugMode())return;const o={};this.pointstoDebugInfo=o,o.poinstoEvent=t;const e=[];function s(t){const o=new Set;return t.forEach(t=>o.add(t.flowType)),o}Object.entries(t.data.pointstoGraph).forEach(t=>{e.push(t[1])}),o.pointstoGraphNodes=e;const n=s(e);function i(o){let e=[];return o.forEach(o=>{e=e.concat(function(o){const e=[];return o.info.inputs.forEach(o=>{e.push(t.data.pointstoGraph[o])}),e}(o))}),e}function h(o){let e=[];return o.forEach(o=>{e=e.concat(function(o){const e=[];return o.info.uses.forEach(o=>{e.push(t.data.pointstoGraph[o])}),e}(o))}),e}o.availableFlowTypes=n;const r={};n.forEach(t=>{const o=function(t){const o=[];return e.forEach(e=>{e.flowType===t&&o.push(e)}),o}(t);r[t]={};const n=i(o);r[t].inputs=s(n);const a=h(o);r[t].uses=s(a)}),o.dependencyFlowTypeIndex=r}findMethodDiscrepancies(t){if(!this.isDebugMode())return;const o=t.events.LoadSVMMethodHistogramEvent,e=new Set;o.data.forEach(t=>{const o=t[0].split(" "),s=o.slice(0,o.length-1);e.add(s.join(" "))});const s=t.events.LoadSVMPointstoAnalysisEvent,n=new Set;Object.keys(s.data.methodNameIndex).forEach(t=>n.add(t));const i=[...e].filter(t=>!n.has(t)),h=[...n].filter(t=>!e.has(t)),r={};r.missingInHist=new Set(h),r.missingInPointsto=new Set(i),this.methodDiscrepancies=r}}}));