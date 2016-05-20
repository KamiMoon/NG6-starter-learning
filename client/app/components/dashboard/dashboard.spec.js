import Module from './dashboard';
import Controller from './dashboard.controller';
import Component from './dashboard.component';
import Template from './dashboard.html';

describe('Dashboard', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Module.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Controller();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    xit('has name in template [REMOVE]', () => {
      expect(Template).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Template);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Controller);
      });
  });
});
