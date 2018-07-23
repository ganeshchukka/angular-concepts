import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { Employee } from './model/emp.model';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './components/employee/list-employees.component';
import { CreateEmployeeComponent } from './components/employee/create-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostService } from './services/calls/postservice.service';
import { PostComponent } from './components/calls/postcomponent/postcomponent.component';
import { SeriesServicesComponent } from './components/calls/series/service.component';
import {  CustomerService  } from './services/calls/serices/customers.service';
import {  CountriesService  } from './services/calls/serices/countries.service';
import { HttpModule } from '@angular/http';
import {  CustomersService  } from './services/calls/parllel/custmores.service';
import {  HelloService  } from './services/calls/parllel/hello.service';
import { ParllelComponent } from './components/calls/parllel/parllel.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { ConfirmEqualValidatorDirective } from './directive/confirm-.equal.validator.directive';
import { NodemysqlComponent } from './components/mysql/Mysqlcrudcomponent/nodemysql.component';
import { CrudService } from './services/mysql/nodecrud service/crudService';
import { LoginComponent } from './components/mysql/login component/login.component';
import { LoginService } from './services/mysql/login service/login.service';
import { StaticFileComponent } from './components/staticFile/static.file.component';
import { StaticFileService } from './services/static/static.service';
import { PhpService } from './services/php/php.service';
import {PhpComponent } from './components/php/php.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpClientService } from './services/Httpclient/httpClient.service';
import { HttpClientComponent } from './components/Httpclient/HtttpClient.component';
import { HttpClientTwoService } from './services/Httpclient/httpClient2.service';
import { HttpClientTwoComponent } from './components/Httpclient/Httpclient2.component';
import { appRoutes } from './Routes/app.routes';
import { AuthService } from './Gurads/auth.service';
import { TwoinOneComponent } from './components/twoin-one/twoin-one.component';
import { TwoinOneTargetComponent } from './components/twoin-one-target/twoin-one-target.component';
import { InterceptorComponent } from './components/interceptor/interceptor.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CallsComponent } from './components/calls/calls.component';
import { MysqlComponent } from './components/mysql/mysql.component';
import { PipeComponent } from './pipes/pipe.Component';
import {PredifinedPipeComponent } from './pipes/predefined.pipe';
import { ReversePipe } from './pipes/usedefined.pipe';
import { ChildComponent } from './components/Input/child/child.component';
import { ParentComponent } from './components/Input/parent/parent.component';
import { InputComponent } from './components/input/input.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { FormsComponent } from './components/forms/forms.component';
import { TdfComponent } from './components/forms/tdf/tdf.component';
import { MdfComponent } from './components/forms/mdf/mdf.component';
import { ViewchildrenComponent } from './components/viewchildren/viewchildren.component';
import { ViewchildrenchildComponent } from './components/viewchildren/viewchildrenchild/viewchildrenchild.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { PredifinedDierectivesComponent } from './components/directives/predifined-dierectives/predifined-dierectives.component';
import { UserDirectivesComponent } from './components/directives/user-directives/user-directives.component';
import { UtestComponent } from './components/utest/utest.component';
import {LazyLoadingComponent } from './components/lazyLoading/lazy.loading.component';
import { MongoService } from './services/mongodb/Service';
import { MongoDbComponent } from './components/mongodb/mongoComponent';
// import { MyInterceptor } from './interceptor/my.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    PostComponent,
    SeriesServicesComponent,
    ParllelComponent,
    CustomDirectiveDirective,
    ConfirmEqualValidatorDirective,
    NodemysqlComponent, LoginComponent, StaticFileComponent, PhpComponent, HttpClientComponent, HttpClientTwoComponent,
    TwoinOneComponent, TwoinOneTargetComponent, InterceptorComponent,
    EmployeeComponent, CallsComponent, MysqlComponent,
    PipeComponent, PredifinedPipeComponent,
   ReversePipe, ChildComponent, ParentComponent, InputComponent, ViewchildComponent,
   FormsComponent,
   TdfComponent,
   MdfComponent,
   ViewchildrenComponent,
   ViewchildrenchildComponent,
   DirectivesComponent,
   PredifinedDierectivesComponent,
   UserDirectivesComponent,
   UtestComponent, LazyLoadingComponent, MongoDbComponent
 /* , MyInterceptor */
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule, HttpModule, HttpClientModule
  ],
  providers: [PostService, CustomerService, CountriesService, CustomersService,
    HelloService, CrudService, LoginService, HttpClientService,
   AuthService, HttpClientTwoService, StaticFileService, PhpService, MongoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
