import defaultEnv from './default'; 
import productionEnv from './default'; 

export default __DEV__ ? defaultEnv : productionEnv;