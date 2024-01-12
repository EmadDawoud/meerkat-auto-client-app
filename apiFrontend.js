async function useDynamicImport() {
  try {
    const {
      CollectorVMApi,
      CollectorVM,
      Province,
      CommunityStr,
      Device,
      DeviceApi,
      SNMPCollector,
      Vendor,
      DeviceType,
      KPIStats,
      MonObj,
      SNMPMIB,
      Metric,
    } = await import('meerkat_automation_apis');

    const collectorVMApi = new CollectorVMApi();
    const collectorVM = new CollectorVM();
    const province = new Province();
    const communityStr = new CommunityStr();
    const device = new Device();
    const deviceApi = new DeviceApi();
    const sNMPCollector = new SNMPCollector();
    const vendor = new Vendor();
    const deviceType = new DeviceType();
    const kPIStats = new KPIStats();
    const monObj = new MonObj();
    const sNMPMIB = new SNMPMIB();
    const metric = new Metric();

    module.exports = {
      collectorVMApi,
      collectorVM,
      province,
      communityStr,
      device,
      deviceApi,
      sNMPCollector,
      vendor,
      deviceType,
      kPIStats,
      monObj,
      sNMPMIB,
      metric,
    };
  } catch (error) {
    console.error('Dynamic import error:', error);
  }
}

// Call the async function
useDynamicImport();
