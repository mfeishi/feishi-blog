type validateType = (val:string)=> boolean;

export interface loginForm {
	username:string; //用户名
	password:string; //密码
}

export interface validateFace {
	validate:validateType;
	message:string;
}