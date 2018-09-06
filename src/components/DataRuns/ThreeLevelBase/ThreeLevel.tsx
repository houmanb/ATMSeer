import * as React from "react";
//import Methods from './Methods';
//import HyperPartitions from "./HyperPartitions";
//import HyperParameters from "./HyperParameters";
import { IHyperpartitionInfo, IClassifierInfo, IConfigsInfo, 
    getDatarunConfigs, IUpdateDatarunConfig, ICommonResponse,
     updateDatarunConfigs, IClickEvent,IRecommendationResult} from 'service/dataService';
import { IDatarun } from "types";
import * as methodsDef from "assets/methodsDef.json";
import {Layout,Col,Row,Checkbox} from 'antd';
const {Content } = Layout;
export interface IProps {
    height: number,
    datarun: IDatarun,
    datasetID: number | null,
    datarunID: number | null,
    setDatarunID: (id: number) => void,
    hyperpartitions : IHyperpartitionInfo[],
    classifiers: IClassifierInfo[],
    compareK: number,
    recommendationResult:IRecommendationResult,
    postClickEvent:(e:IClickEvent)=>void;
}

export interface IState {
    selectedMethod:string,
    configsBudget: number,
    configsMethod : string[],
    loading: boolean,
    methodSelected:any,
    hyperparametersRangeAlreadySelected:any,
    hyperpartitionsAlreadySelected:number[]
}

export default class ThreeLevel extends React.Component<IProps, IState>{
    index = 0
    constructor(props: IProps){
        super(props)
        //this.onSelectMethod = this.onSelectMethod.bind(this)
        this.state={
            selectedMethod: '',
            configsBudget: 100,
            configsMethod: [],
            loading: false,
            methodSelected:{},
            hyperparametersRangeAlreadySelected:{},
            hyperpartitionsAlreadySelected:[]

        }
    }

 
    render(){
        
        /*
        let {datarun, hyperpartitions, classifiers, datarunID, compareK} = this.props
        classifiers = classifiers.sort(
            (a,b)=>b.cv_metric-a.cv_metric
        ) // best performance in the front
        let {selectedMethod} = this.state
        let usedMethods: string[] = Object.keys(datarun);
        let unusedMethods = Object.keys(methodsDef)
            .filter(
                (name: string) => usedMethods.indexOf(name) < 0
            )
        let svgWidth = window.innerWidth*5/6,
        width1 = svgWidth*3/13,
        width2 = svgWidth*1/2,
        width3 = svgWidth*1/6,
        headerHeight = 10
        console.log("three level render");
        console.log(this.state.hyperpartitionsAlreadySelected);
        */
       /* return (<div
            style={{
                height: `${this.props.height}%`,
                width: '100%',
                borderTop: ".6px solid rgba(0,0,0, 0.4)"
                }}
            />)*/
           /*
        
            <div>
                <h4>Budget</h4>
                <InputNumber min={1} value={this.state.configsBudget} style={{ width: "130px" }} onChange={this.onBudgetChange} />
                <br /><Button key={"_button_"+(++this.index)} loading={this.state.loading} onClick={this.updateCurrentDataRun}>Update</Button>
                <br /></div>
            </div>*/


            return <Layout className="app" >
            
            <Content className='appContent' >
                <Row style={{ "height": "100%" }}>
                    <Col span={4} className="col">
                    <h4 style={{display: "inline"}}> Methods </h4>
                   


                    <CheckboxGroup options={method_options}  />
                    </Col >

                    <Col span={20} className="col">
                       world
                    </Col>
                    
                </Row>
            </Content>
        </Layout>
    }
}