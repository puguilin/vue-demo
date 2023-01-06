// 引入axios
import axios from 'axios'
// 请求延时（毫秒数，如果请求话费超过了'timeout'的时间，请求将被中断）
axios.defaults.timeout = 100000
axios.defaults.baseURL="/api"
axios.defaults.headers.post['Content-Type'] = 'application/json'


//查询学生按条件查询
export const getAllData = params => {
  //return axios.get(`http://localhost:8082/api/student/orderBy`,{ params: params });
  return axios.get(`http://localhost:8082/api/student/orderBy`, params);
};



//新增 学生--object
export const insertObject = params => {
  return axios.post(`http://localhost:8082/api/student/saveOrUpdate`,JSON.stringify(params));   

  /**   
   * 
   * JSON.stringify(params)  "{\"SNO\":10,\"SNAME\":\"测试对象参数 新增前端\",\"remark\":\"备注对象\",\"SSEX\"}
   * 
   *  后端用json对象来接收
   *  后端用TDO对象接收来接收  （后端接收时 要把json对象转化成对象 ） 
   *  StudentDto dto = JSONObject.toJavaObject(object, StudentDto.class);
   * {
      "SNO": 10,
      "SNAME": "测试对象参数 新增前端",
      "remark": "备注对象",
      "SSEX": "F"
    }
*/

};

//新增 学生 --map
export const insertMap = params => {
  return axios.post(`http://localhost:8082/api/student/saveOrUpdateByMap`,params );   // 后端用map来接收 
    // 下面这种后端用map来接收  后端要获取key再使用 麻烦 直接用上面的即可
  //return axios.post(`http://localhost:8082/api/student/saveOrUpdateByMap`,{ params: params } ); 

};



//按条件查询学生
export const getById = params => {
  return axios.get(`http://localhost:8082/api/student/getById`,{ params: params });
};

//按条件查询用户
export const getUserById = params => {
  return axios.get(`http://localhost:8082/api/user/getById`,{ params: params });
};

/**
 * 获取用户信息
 */
//export const getAdminInfo = () => fetch('/admin/info');
export const getAdminInfo = params => {
  return axios.get(`http://localhost:8082/api/user/queryById`,{ params: params });
};